
'''
Code for classifying HEOG based on one second of UNFILTERED and CONVERTED data
UNFILTERED: This means that no filtering has been done on the data, if filtering has been done
            then it is allowable if the data has not been highpassed with a frequency higher than 1 Hz and lowpassed with a frequency lower than 50 Hz.
CONVERTED: This means that the data has been converted from the original bits scale to micro Volts
'''


import scipy
import numpy as np
from scipy.fft import fft


def predict_HEOGEpoch(
        epoch,
        HEOGThreshold,
        highFreqThresh,
        lowFreqThres,
        highFreqPowThresh,
        fs):
    '''
    Classifying HEOG based on one second of UNFILTERED and CONVERTED data
    input:
        epoch: unfiltered and converted one second, and one dimension of biosignal in a numpy array (250 samples)
        HEOGThreshold = 35, time series threshold for HEOG
        highFreqThresh = 60, time series threshold for EMG
        lowFreqThres = 110, time series threshold for EMG
        highFreqPowThresh = 30, FFT threshold for EMG
        fs = 250, sampling rate

    output:
        predictionHEOG: 1 for HEOG left, 2 for HEOG right, 0 for nothing detected
    '''

    predictionHEOG = 0
    predictionEMG = predict_EMGEpoch(
        epoch, highFreqThresh, lowFreqThres, highFreqPowThresh, fs)
    if predictionEMG == 1:
        return predictionHEOG
    else:
        b, a = scipy.signal.iirfilter(
            int(3), [1, 5], btype='bandpass', ftype='butter', fs=float(fs), output='ba')
        filteredEpoch = scipy.signal.filtfilt(b=b, a=a, x=epoch, padtype=None)
        maxPeak = np.max(filteredEpoch)
        maxLocation = np.where(filteredEpoch == maxPeak)[0][0]
        minPeak = np.min(filteredEpoch)
        minLocation = np.where(filteredEpoch == minPeak)[0][0]
        peakToPeakY = maxPeak - minPeak
        peakToPeakX = (maxLocation - minLocation) / fs
        if peakToPeakY > HEOGThreshold:
            if peakToPeakX >= 0:
                predictionHEOG = 2
            else:
                predictionHEOG = 1
        return predictionHEOG


def predict_EMGEpoch(
        epoch,
        highFreqThresh,
        lowFreqThres,
        highFrewPowThresh,
        fs):
    '''
    Classifying EMG based on one second of UNFILTERED and CONVERTED data
    input:
        epoch: unfiltered and converted one second, and one dimension of biosignal in a numpy array (250 samples)
        HEOGThreshold = 35, time series threshold for HEOG
        highFreqThresh = 60, time series threshold for EMG
        lowFreqThres = 110, time series threshold for EMG
        highFreqPowThresh = 30, FFT threshold for EMG
        fs = 250, sampling rate

    output:
        predictionEMG: 1 for EMG detected, 0 for nothing detected
    '''
    EMGFrequencyBand = {'Gamma': (25, 49)}
    predictionEMG = 0
    b, a = scipy.signal.iirfilter(
        int(3), [1, 5], btype='bandpass', ftype='butter', fs=float(fs), output='ba')
    lowFreqEpoch = scipy.signal.filtfilt(b=b, a=a, x=epoch, padtype=None)
    maxPeakLow = np.max(lowFreqEpoch)
    minPeakLow = np.min(lowFreqEpoch)
    peakToPeakLow = maxPeakLow - minPeakLow
    b, a = scipy.signal.iirfilter(
        int(3), [25, 49], btype='bandpass', ftype='butter', fs=float(fs), output='ba')
    EMG_High = scipy.signal.filtfilt(b=b, a=a, x=epoch, padtype=None)
    maxPeakHigh = np.max(EMG_High)
    minPeakHigh = np.min(EMG_High)
    peakToPeakHigh = maxPeakHigh - minPeakHigh
    highFreqPow = calculateFreqPow(epoch, EMGFrequencyBand, 3, fs)
    if peakToPeakLow > lowFreqThres or peakToPeakHigh > highFreqThresh or highFreqPow > highFrewPowThresh:
        predictionEMG = 1
    return predictionEMG


def calculateFreqPow(epoch, eeg_bands, powNumber, fs):
    '''
    Calculating frequency power
    input:
        epoch: unfiltered and converted one second, and one dimension of biosignal in a numpy array (250 samples)
        eeg_bands: dictionary with frequency to calculate power at
        powNumber = 60, time series threshold for EMG
        fs = 250, sampling rate

    output:
        predictionEMG: 1 for EMG detected, 0 for nothing detected
    '''
    numberFreqBands = len(eeg_bands)
    fftPowArr = np.zeros((numberFreqBands))
    fftPowSpectrum = ((2) * (abs(fft(epoch) / len(epoch))))**powNumber
    for y in range(numberFreqBands):
        lowFreq, highFreq = ranges(y, eeg_bands)
        fftPow = calculateFreqBandPow(fftPowSpectrum, [lowFreq, highFreq], fs)
        fftPowArr[y] = fftPow
    return fftPowArr


def calculateFreqBandPow(fftPowSpectrum, range, fs):
    '''
    Calculating frequency band power
    input:
        fftPowSpectrum: FFT power spectrum for calculating band power
        range: frequency range
        fs = 250, sampling rate

    output:
        averagePower: average band power
    '''
    freqPeriod = (fs) / len(fftPowSpectrum)
    totalPower = fftPowSpectrum[round(
        range[0] * 1 / freqPeriod):round((range[1]) * 1 / freqPeriod)]
    averagePower = sum(totalPower) / len(totalPower)
    return averagePower


def ranges(x, eeg_bands):
    '''
    Extracting all ranges from dictionary
    input:
        fftPowSpectrum: FFT power spectrum for calculating band power
        range: frequency range
        fs = 250, sampling rate

    output:
        low: High frequency value
        high: Low frequency value
    '''
    data_inter_x = list(eeg_bands.items())
    nump_bands = np.array(data_inter_x)
    range_i = nump_bands[x, 1]
    low = range_i[0]
    high = range_i[1]
    return low, high


def calculateFreqBandPow(fftPowSpectrum, range, fs):
    '''
    Calculating frequency band power
    input:
        fftPowSpectrum: FFT power spectrum for calculating band power
        range: frequency range
        fs = 250, sampling rate
    output:
        averagePower: average band power
    '''
    freqPeriod = (fs) / len(fftPowSpectrum)
    totalPower = fftPowSpectrum[round(
        range[0] * 1 / freqPeriod):round((range[1]) * 1 / freqPeriod)]
    averagePower = sum(totalPower) / len(totalPower)
    return averagePower


def ranges(x, eeg_bands):
    '''
    Extracting all ranges from dictionary
    input:
        fftPowSpectrum: FFT power spectrum for calculating band power
        range: frequency range
        fs = 250, sampling rate
    output:
        low: High frequency value
        high: Low frequency value
    '''
    data_inter_x = list(eeg_bands.items())
    nump_bands = np.array(data_inter_x)
    range_i = nump_bands[x, 1]
    low = range_i[0]
    high = range_i[1]
    return low, high


'''
Example use:

HEOG_prediction = predict_HEOGEpoch(epoch = oneSecondData,
                                    HEOGThreshold = 35,
                                    highFreqThresh = 60,
                                    lowFreqThres = 110,
                                    highFreqPowThresh = 30,
                                    fs = 250)
'''
