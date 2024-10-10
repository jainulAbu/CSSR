const express = require('express');
const app = express();
const port = 3000;

// Function to simulate random sensor data (0 for no detection, 1 for human detected)
function getRandomSensorData() {
  return Math.floor(Math.random() * 2);  // Randomly returns 0 or 1
}

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API endpoint to return random sensor data
app.get('/sensor_value', (req, res) => {
  const sensorData = {
    human_detected: getRandomSensorData(),
    latitude: (Math.random() * 180 - 90).toFixed(6),   // Random latitude between -90 and +90
    longitude: (Math.random() * 360 - 180).toFixed(6)  // Random longitude between -180 and +180
  };
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
