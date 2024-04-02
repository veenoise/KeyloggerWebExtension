# KeyloggerWebExtension

This is a simple keylogger application that redirects to a flask server the keystrokes of the victim. This web extension does not work in some websites, but it works in chatgpt, Facebook, and so on. The application is in localhost, do not use this for malicious purposes!

## Usage:

Make a virtual environment in /flask_serverside_application/

```
cd flask_serverside_application
python3 -m venv .venv
```

Activate the virtual environment

```
source /.venv/bin/activate
```

Install dependencies

```
pip3 install -r requirements.txt
```

Run the flask app

```
python3 app.py
```