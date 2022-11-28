const path = require('path');

// TODO: Add comment explaining role of route below
// Serves the user the index html in the client distribution folder
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
