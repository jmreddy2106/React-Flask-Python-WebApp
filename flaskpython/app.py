from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_mysql_connector import MySQL
import os
import json


app = Flask(__name__)
CORS(app, support_credentials=True)

# read database configuration from .evn file 
token = os.getenv("ACCESS_TOKEN")
db_host = os.getenv("DB_HOST")
repo_db = os.getenv("DB_DATABASE")
db_user = os.getenv("DB_USER")
pass_word = os.getenv("DB_PASSWORD")


app.config['MYSQL_HOST'] = db_host
app.config['MYSQL_DATABASE'] = repo_db
app.config['MYSQL_USER'] = db_user
app.config['MYSQL_PASSWORD'] = pass_word

mysql_connect = MySQL(app)

# Backend route 
@app.route('/')
def hello():
    return 'Welcome to Flask python backend..!'

def submitData(userObj):
    from python import submitUserData as sud
    return sud.insertUserData(userObj)


# Submit user form data using REST API POST method
@app.route("/sumbitFormData", methods=['POST'])
def get_crypto_detector():
    if request.method == 'POST':
        # Read the form data and load as JSON
        userObj = request.json
        res = submitData(userObj)
    return res



if __name__ == "__main__":
    app.run(debug=True, port=8686)