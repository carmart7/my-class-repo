import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// creates database with the name of 'todos' and a version of 1.

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // Checks to see if the database needs to be updated
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // Creating a key id that auto increments and will be tied to data stored
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
