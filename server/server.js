// [START gae_node_request_example]
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const axios = require('axios').default;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, papa gog').end();
});
const url = 'https://api.themoviedb.org/3/search/multi?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=game';
app.get('/test', (req, res) => {
  axios.get(url).then((response) => {
    // console.log(response)
    res.json(response.data);
  }).catch((error) => {
    console.log(error);
  });
});
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});
app.post('/submit', (req, res) => {
  console.log({
    name: req.body.name,
    message: req.body.message,
  });
  res.send('Thanks for your message!');
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
