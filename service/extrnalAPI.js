const axios = require('axios');

exports.distanceCalculate = async (userLatitude, userLongitude, latitude, longitude) => {
  const distanceAPI = 'https://gg-backend-assignment.azurewebsites.net/api/Distance';
    const url = `${distanceAPI}?code=${process.env.DISTANCE_API_CODE}==&latitude1=${userLatitude}&longitude1=${userLongitude}&latitude2=${latitude}&longitude2=${longitude}`;
    const response = await axios.get(url);
    return response.data.distance;

};

exports.weatherCondition = async (city, date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  const new_date =  `${year}-${month}-${day}`;

  const weatherAPI = 'https://gg-backend-assignment.azurewebsites.net/api/Weather';
    const url = `${weatherAPI}?code=${process.env.WEATHER_API_CODE}==&city=${encodeURIComponent(city)}&date=${new_date}`;
    const response = await axios.get(url);
    return response.data.weather;
  
}