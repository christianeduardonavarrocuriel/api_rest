import requests
import json
import random
import time

url = "url_sensores" # Reemplaza "url_sensores" con la URL de tu endpoint de sensores

def get_sensores():
    response = requests.get(url)
    print(response.status_code)
    print(response.text)

def simular_sensores():
    while True:
        data = {
            "temperatura":random.randint(0,100),
            "humedad":random.randint(0,100),
        }
        response = requests.put(url, data=json.dumps(data))
        print(response.status_code)
        print(response.text)
        time.sleep(5)

if __name__ == "__main__":
    simular_sensores()
