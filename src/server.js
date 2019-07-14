const express = require('express');
const Request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/location/search', (req, res) => {
  console.log('requesting location....');
  const location = req.query.query;

  Request.get(
    `https://www.metaweather.com/api/location/search/?query=${location}`,
    (error, response, body) => {
      if (error) {
        console.log('error requesting location....');
        return console.error('error', error);
      } else {
        res.send(body);
        return console.log('success requesting location....');
      }
    },
  );
});

app.get('/api/location/:location', (req, res) => {
  const location = req.params.location;
  console.log('requesting location info....');

  Request.get(
    `https://www.metaweather.com/api/location/${location}`,
    (error, response, body) => {
      if (error) {
        console.log('error requesting location info');
        return console.error('error', error);
      } else {
        res.send(body);
        console.log('success', body, location);
        return console.log('success requesting location info');
      }
    },
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
