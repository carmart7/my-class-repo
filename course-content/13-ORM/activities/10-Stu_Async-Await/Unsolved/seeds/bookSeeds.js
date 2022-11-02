const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => {
  let sync = await sequelize.sync({ 
    force: true 
  })

  let bulkCreateBook = await Book.bulkCreate(bookSeedData);

  let bulkCreateLib = await Library.bulkCreate(librarySeedData);

  console.log('All Seeds Planted'); 
  return bulkCreateBook, bulkCreateLib;
  process.exit(0);
};

seedDatabase();
