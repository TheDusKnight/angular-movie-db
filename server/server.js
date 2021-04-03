// [START gae_node_request_example]
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist/app')));
function noQuery(url, res, type) {
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.results.forEach((result) => {
      if (result.poster_path != null) {
        const data = {
          id: result.id || null,
          name: result.title || result.name || null,
          poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
          media_type: type,
        };
        if (o[key].length < 20) {
          o[key].push(data);
        }
      } else {
        console.log(`${result.id} invalid poster_path`);
      }
    });
    o.total = o[key].length;
    // console.log(o);
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getVideo(url, res) {
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.results.forEach((result) => {
      if (result.site === 'YouTube' && (result.type === 'Trailer' || result.type === 'Teaser')) {
        const data = {
          site: result.site,
          type: result.type,
          name: result.name || null,
          key: result.key || null,
        };
        if (o[key].length < 20) {
          o[key].push(data);
        }
      } else {
        console.log('invalid video');
      }
    });
    if (o[key].length === 0) {
      o[key].push({
        site: 'YouTube',
        type: 'Trailer',
        name: 'Dilwale Dulhania Le Jayenge',
        key: 'tzkWB85ULJY',
      });
    }
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getDetail(url, res) {
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    const result = response.data;
    const genre = [];
    result.genres.forEach((g) => {
      genre.push(g.name);
    });
    const language = [];
    result.spoken_languages.forEach((l) => {
      language.push(l.name);
    });
    const data = {
      name: result.title || result.name || null,
      genres: genre,
      spoken_languages: language,
      // eslint-disable-next-line max-len
      release_date: result.release_date || result.first_air_date || null,
      // check list or null
      runtime: result.runtime || (result.episode_run_time ? result.episode_run_time[0] : null),
      overview: result.overview || null,
      vote_average: result.vote_average || null,
      tagline: result.tagline || null,
      poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
    };
    o[key].push(data);
    // if (o[key].length === 0) {
    //   o[key].push({
    //     site: 'YouTube',
    //     type: 'Trailer',
    //     name: 'Dilwale Dulhania Le Jayenge',
    //     key: 'tzkWB85ULJY',
    //   });
    // }
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getReview(url, res) {
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.results.forEach((result) => {
      if (result.author_details != null) {
        const avatarPath = () => {
          if (result.author_details.avatar_path != null) {
            const tmp = result.author_details.avatar_path;
            if (tmp.slice(0, 5) === '/http') {
              return tmp.slice(1);
            }
            return `https://image.tmdb.org/t/p/original${tmp}`;
          }
          return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
        };
        const data = {
          author: result.author || null,
          content: result.content ? result.content.replace(/(\r\n|\n|\r)/gm, '') : null,
          created_at: result.created_at || null,
          url: result.url || null,
          rating: result.author_details.rating ? result.author_details.rating : 0,
          // avatar_path: result.author_details.avatar_path ? result.author_details.avatar_path
          // : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU',
          avatar_path: avatarPath(),
        };
        if (o[key].length < 10) {
          o[key].push(data);
        }
      }
    });
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getCast(url, res) {
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.cast.forEach((result) => {
      if (result.profile_path != null) {
        const data = {
          id: result.id || null,
          name: result.name || null,
          character: result.character || null,
          profile_path: `https://image.tmdb.org/t/p/w500/${result.profile_path}` || null,
        };
        o[key].push(data);
      }
    });
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getCastDetail(url, res) {
  axios.get(url).then((response) => {
    console.log(response);
    const o = {};
    const key = 'results';
    o[key] = [];
    const result = response.data;
    const data = {
      profile_path: `https://image.tmdb.org/t/p/w500/${result.profile_path}` || null,
      birthday: result.birthday || null,
      gender: result.gender || null,
      name: result.name || null,
      place_of_birth: result.place_of_birth || null,
      homepage: result.homepage || null,
      // also_known_as: (result.also_known_as && result.also_known_as.length > 0) || null,
      also_known_as: result.also_known_as || null,
      // eslint-disable-next-line max-len
      known_for_department: result.known_for_department || null,
      biography: result.biography ? result.biography.replace(/(\r\n|\n|\r)/gm, '') : null,
    };
    o[key].push(data);
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
function getCastExternal(url, res) {
  axios.get(url).then((response) => {
    console.log(response);
    const o = {};
    const key = 'results';
    o[key] = [];
    const result = response.data;
    const data = {
      imdb_id: result.imdb_id ? `https://imdb.com/name/${result.imdb_id}` : null,
      facebook_id: result.facebook_id ? `https://facebook.com/${result.facebook_id}` : null,
      instagram_id: result.instagram_id ? `https://instagram.com/${result.instagram_id}` : null,
      twitter_id: result.twitter_id ? `https://twitter.com/${result.twitter_id}` : null,
    };
    o[key].push(data);
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/app/index.html'));
  // res.status(200).send('Hello, papa').end();
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
          id: result.id || null,
          name: result.name || result.title || null,
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
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
});
app.get('/trend/movie', (req, res) => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=788c93d7dc54e946665b5958c8ff0a3a';
  noQuery(url, res, 'movie');
});
app.get('/trend/tv', (req, res) => {
  const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=788c93d7dc54e946665b5958c8ff0a3a';
  noQuery(url, res, 'tv');
});
app.get('/top/movie', (req, res) => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1';
  noQuery(url, res, 'movie');
});
app.get('/top/tv', (req, res) => {
  const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1';
  noQuery(url, res, 'tv');
});
app.get('/current/movie', (req, res) => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1';
  axios.get(url).then((response) => {
    const o = {};
    const key = 'results';
    o[key] = [];
    response.data.results.forEach((result) => {
      if (result.poster_path != null) {
        const data = {
          id: result.id || null,
          name: result.title,
          backdrop_path: `https://image.tmdb.org/t/p/original${result.backdrop_path}`,
        };
        if (o[key].length < 5) {
          o[key].push(data);
        }
      } else {
        console.log(`${result.id} invalid backdrop_path`);
      }
    });
    o.total = o[key].length;
    res.json(o);
  }).catch((error) => {
    console.log(error);
  });
});
app.get('/pop/movie', (req, res) => {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1';
  noQuery(url, res, 'movie');
});
app.get('/pop/tv', (req, res) => {
  const url = 'https://api.themoviedb.org/3/tv/popular?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1';
  noQuery(url, res, 'tv');
});
app.get('/recommend/movie/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  noQuery(url, res, 'movie');
});
app.get('/recommend/tv/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  noQuery(url, res, 'tv');
});
app.get('/similar/movie/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  noQuery(url, res, 'movie');
});
app.get('/similar/tv/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  noQuery(url, res, 'tv');
});
app.get('/movie/video/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getVideo(url, res);
});
app.get('/tv/video/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getVideo(url, res);
});
app.get('/movie/detail/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getDetail(url, res);
});
app.get('/tv/detail/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getDetail(url, res);
});
app.get('/movie/review/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getReview(url, res);
});
app.get('/tv/review/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getReview(url, res);
});
app.get('/movie/cast/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getCast(url, res);
});
app.get('/tv/cast/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getCast(url, res);
});
app.get('/cast/detail/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getCastDetail(url, res);
});
app.get('/cast/external/:id', (req, res) => {
  const { id } = req.params;
  const url = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&page=1`;
  getCastExternal(url, res);
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

// define functions

module.exports = app;
