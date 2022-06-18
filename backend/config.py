"""This module is to configure app to connect with database."""

from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
import os
print (os.environ["db-name"])
DBNAME = os.environ["db-name"]

DATABASE = MongoClient()[DBNAME] # DB_NAME
DEBUG = True
client = MongoClient(f'mongodb://admin:admin@{DBNAME}-mongodb:27017/')
print(client.test_database)
try:
    # The ping command is cheap and does not require auth.
    print(client[DBNAME])
    print(client.restfulapi.users)
except ConnectionFailure:
    print("Server not available")
