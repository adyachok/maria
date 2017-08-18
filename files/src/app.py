#!/usr/bin/env python
import datetime
import random

from flask import Flask
from flask import jsonify

from flask.templating import render_template

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html", name="Daddy Pig`s site")


@app.route("/health/<mins>")
def my_health(mins):
    health_data = health_data_generator(mins)
    return jsonify(health_data)


def health_data_generator(mins):
    '''
    tree options daily load, moving, high load
    :return: generated fake data
    '''
    var = random.randint(0, 2)
    # Ranges for diff physical load
    mod = {
        'heartbeats': [(55, 65),(70, 80),(110, 145)],
        'volume_of_oxygen': [(2.3, 2.7),(3.3, 3.7),(4.1, 5.7)],
    }
    # Generator
    now = datetime.datetime.now()
    health_data = []
    for minute in xrange(int(mins)):
        delta = datetime.timedelta(minutes=minute)
        cur_time = now - delta
        data = {
            'time': cur_time.strftime("%Y-%m-%d %H:%M"),
            'heartbeats': random.randint(*mod['heartbeats'][var]),
            'volume_of_oxygen': round(random.uniform(*(mod['volume_of_oxygen'][var])), 4)
        }
        health_data.append(data)
    return health_data

app.run('0.0.0.0', 8080, debug=True)