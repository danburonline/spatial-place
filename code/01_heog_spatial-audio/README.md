# HEOG Classifier

## Prerequisites

- Pipenv `v2022.1.8+`
- Pyenv `v2.2.3+`
- Python `v3.6+`
- Git `v2.32.0+`

## Before you start

- CD to the `classifiers/heog` directory
- Check if you have the correct Python version installed, which is described in the `.python-version file` via `python --version`
- Install the required packages in a new Python environment via `pipenv install`
- Activate the newly created Python environment via `pipenv shell`
- Check if the required packages are installed via `pipenv check`
- Check if the correct Python version is installed as defined in the `.python-version file` via `python --version`
- You can exit the Python environment via the `exit` command

## Useful commands

### Start the Documentation

[Pdoc](https://pdoc.dev) is installed as a development package to start a local webserver to access the documentation easily via the `localhost:8080` address in the browser. Simply run the following command to start the documentation server:

```bash
pdoc your_python_module
# or
pdoc ./my_project.py
```

### Format the codebase

autopep8 is installed as a development package to format the codebase. Simply run the following command to format the codebase: `autopep8 --in-place --recursive .`
