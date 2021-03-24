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
app.get('/search/multi/:movie', (req, res) => {
  const { movie } = req.params;
  // console.log(escape(movie));
  const url = `https://api.themoviedb.org/3/search/multi?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1&query=${escape(movie)}`;
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    // console.log(response.data.results);
    // at most 7, remove if backdrop_path not exist or null, remove if it is not tv or movie type
    response.data.results.forEach((result) => {
      if (result.backdrop_path != null && (result.media_type === 'movie' || result.media_type === 'tv')) {
        const data = {
          id: result.id,
          name: result.name || result.title,
          backdrop_path: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
          media_type: result.media_type,
        };
        if (o[key].length < 7) {
          o[key].push(data);
        }
      } else {
        console.log(`${result.id} invalid search multi`);
      }
    });
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
});
app.get('/trend/movie', (req, res) => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=788c93d7dc54e946665b5958c8ff0a3a';
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.results.forEach((result) => {
      if (result.poster_path != null) {
        const data = {
          id: result.id,
          name: result.title,
          poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        };
        if (o[key].length < 20) {
          o[key].push(data);
        }
      } else {
        console.log(`${result.id} invalid trend movie`);
      }
    });
    res.json(o);
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
