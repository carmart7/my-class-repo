const express = require('express');
const mongodb = require('mongodb').MongoClient;
//requiring and assigning MongoClient to mongodb

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/inventoryDB`; //locally hosted database

let db;

mongodb.connect( // connecting to database
  connectionStringURI, //saved databse URI
  { useNewUrlParser: true, useUnifiedTopology: true }, //object with options to passs
  (err, client) => { //callback once connecting
    db = client.db(); //declare db variable with the client's databse
    app.listen(port, () => { 
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne( //inserts object provided to bookCollection database
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.post('/create-many', function (req, res) {
  db.collection('bookCollection').insertMany(
    [
      {"title" : "Oh the Places We Will Go!"},
      {"title" : "Diary of Anne Frank"}
    ], 
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
