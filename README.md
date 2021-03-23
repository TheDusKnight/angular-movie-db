 [doc.md](doc.md) 

key: `788c93d7dc54e946665b5958c8ff0a3a`

`npx nodemon server.js`

Use axis with express: @923

``` javascript
url = 'https://api.themoviedb.org/3/search/multi?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&query=game';

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