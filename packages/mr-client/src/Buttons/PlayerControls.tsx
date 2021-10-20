import Image from 'next/image'

import arrowIcon from '../../public/svg/direction-control-button.svg'

export type RestartButtonProps = {
  moveForwards?: () => void
  moveRight?: () => void
  moveLeft?: () => void
  moveDownwards?: () => void
}

export default function RestartButton({
  moveForwards,
  moveRight,
  moveLeft,
  moveDownwards
}: RestartButtonProps): JSX.Element {
  return (
    <div className='absolute flex items-center justify-center w-screen h-screen'>
      <div className='z-20 grid grid-cols-3 grid-rows-3 gap-3'>
        <div className='col-start-2 row-start-1' onClick={moveForwards}>
          <Image
            className='transition-opacity opacity-50 cursor-pointer hover:opacity-100'
            src={arrowIcon}
            alt={'Move forwards button'}
            data-element='forward'
          />
        </div>

        <div
          className='col-start-3 row-start-2 transform rotate-90'
          onClick={moveRight}
        >
          <Image
            className='transition-opacity opacity-50 cursor-pointer hover:opacity-100'
            src={arrowIcon}
            alt={'Move right button'}
            data-element='right'
          />
        </div>

        <div
          className='col-start-2 row-start-3 transform rotate-180'
          onClick={moveDownwards}
        >
          <Image
            className='transition-opacity opacity-50 cursor-pointer hover:opacity-100'
            src={arrowIcon}
            alt={'Move downwards button'}
            data-element='backward'
          />
        </div>

        <div
          className='col-start-1 row-start-2 transform -rotate-90'
          onClick={moveLeft}
        >
          <Image
            className='transition-opacity opacity-50 cursor-pointer hover:opacity-100'
            src={arrowIcon}
            alt={'Move left button'}
            data-element='left'
          />
        </div>
      </div>
    </div>
  )
}
