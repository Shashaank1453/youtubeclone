const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'b01031d13emsh044fc32b7bd6505p15f2bfjsn59ebdc455fff',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'i have to conduct an API workshop, any tips for me?'
      }
    ],
    web_access: false,
    stream: false
  }
};

fetchAPI();

async function fetchAPI() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}