const request = require('request');
const { fetchMyIP } = require('./iss');
const { Latitude, Longitude } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


