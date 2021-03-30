 [doc.md](doc.md) 

key: `788c93d7dc54e946665b5958c8ff0a3a`

cd server

npx nodemon server.js

cd app

npm start



Use axis with express: @923

``` javascript
url = 'https://api.themoviedb.org/3/search/multi?api_key=788c93d7dc54e946665b5958c8ff0a3a&language=en-US&query=game';

// GET method route

app.get('/', function(req, res) {

 axios.get(url)

 .then(response => {

 // console.log(response)

 res.json(response.data);

 })

 .catch(error => {

 console.log(error)

 })

})
```

for 4.1.5, 4.1.3, 4.1.2, 4.1.14, etc..., ignore movies that don't have backdrop_path

## Continue Watching

Continue Watching and watchlist peresist

consider the continue watching, stored in localStorage, as an LRU. Always place the most recently watched at the first element and set an upper bound to the total number to 24. Remove the least recently viewed ones at the end of list

if the movie/tv show is already in the continue watching section, it's been placed in the **first place** (start of the carousel).

The position will be updated and it should not occur at the old position anymore.

How to scale the card on hover and it's not just zoom the image@1128 Try giving some extra padding for the container.

@1002How to modify css of ngb-corousel? Hint: look for ng-deep

