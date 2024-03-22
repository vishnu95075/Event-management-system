const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./database/database");
const app = express();
const extrnalAPI = require("./service/extrnalAPI")

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Event management system (GyanGrove) Ready to Deployment.");
})

app.post('/event', (req, res) => {
  const { event_name, city_name, date, time, latitude, longitude } = req.body;
  const sql = 'INSERT INTO event_table (event_name, city_name, date, time, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [event_name, city_name, date, time, latitude, longitude], (err, result) => {
    if (err) throw err;
    res.send('Event successfully Saved.');
  });

});

app.get('/events/find', (req, res) => {
  const sql = "SELECT event_name, city_name, date, time, latitude, longitude FROM event_table WHERE date BETWEEN CURRENT_DATE + INTERVAL '1' DAY AND CURRENT_DATE + INTERVAL '14' DAY ORDER BY date";
  const { user_latitude, user_longitude } = req.body;
  const { page } = req.query;
  db.query(sql, async (err, data) => {
    if (err) throw err;
    const resultsQuery = await Promise.all(data.map(async item => {
      const distance_km = await extrnalAPI.distanceCalculate(user_latitude, user_longitude, item.latitude, item.longitude);
      const weather = await extrnalAPI.weatherCondition(item.city_name, item.date);
      return {
        event_name: item.event_name,
        city_name: item.city_name,
        date: item.date,
        weather: weather,
        distance_km: distance_km
      };
    }));

    const totalEvents = resultsQuery.length;
    const pageSize = 10;
    const totalPages = Math.ceil(totalEvents / pageSize);
    const startIndex = (page - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, totalEvents);

    const events = resultsQuery.slice(startIndex, endIndex);
    res.json(
      {
        events,
        page,
        pageSize,
        totalEvents,
        totalPages
      }
    );

  });

});

module.exports = app;