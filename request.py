import requests

url = 'https://open-ai21.p.rapidapi.com/conversationgpt35'

headers = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'b01031d13emsh044fc32b7bd6505p15f2bfjsn59ebdc455fff',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
}

data = {
    'messages': [
        {
            'role': 'user',
            'content': 'Tell me about yourself'
        }
    ],
    'web_access': False,
    'stream': False
}

try:
    response = requests.post(url, headers=headers, json=data)
    response_data = response.json()
    print(response_data["BOT"])
except Exception as e:
    print(f"Error: {e}")
