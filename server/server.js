const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
const city = 'Kyiv';

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the weather data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
