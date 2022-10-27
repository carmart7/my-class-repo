const express = require('express');
const axios = require('axios');
// TODO: Require the json file located in `/db`
const json = require('./db/repos.json')

// TODO: Create an `app` variable set to the value of `express()`
const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => {
  res.json(json);
})

app.get('/api/organization/:organization', (req, res) => {
  axios.get(`https://api.github.com/orgs/${req.params.organization}/repos`).then(function(data){
    res.json(data.data);
  });
});
// TODO: Have the app listen on port 3001

app.listen(3001, () => {
  console.log('Listening to port 3000');
})
