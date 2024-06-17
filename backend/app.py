from flask import Flask, jsonify
import requests

app = Flask(__name__)

NASA_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
NASA_API_KEY = 'DEMO_KEY'

@app.route('/api/missions')
def get_missions():
    params = {
        'sol': 1000,
        'api_key': NASA_API_KEY
    }
    response = requests.get(NASA_API_URL, params=params)
    data = response.json()
    return jsonify(data['photos'])

if __name__ == '__main__':
    app.run(debug=True)
