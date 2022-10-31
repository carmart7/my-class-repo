const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creates connection based on object provided with the host, user, password, and database keys provided
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'myPassw0rd!',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
