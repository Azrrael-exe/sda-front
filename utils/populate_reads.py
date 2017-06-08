import requests
from random import random
from datetime import datetime

url = 'http://solarpes.herokuapp.com/client/'
user = '3006750425'
panel = 'mypanel'


for i in xrange(20):
    payload = {
        'time' : datetime(2017,06,07,i,0,0).__str__(),
        'temperature': 20 + (20 * random()),
        'current': {
            'network' : random(),
            'panel' : random(),
            'used' : random()
        }
    }
    r = requests.post(url + '/' + user + '/' + panel, json = payload)
