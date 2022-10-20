const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }
  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for (const animal of animalJSON) {
    if (animal.species === 'dog') {
      dogs.push(animal);
    } else {
      cats.push(animal);
    }
  }

  var dogsJSON = JSON.stringify(dogs, null, 2);
  writeToFile('dogs', dogsJSON)
  var catsJSON = JSON.stringify(cats, null, 2);
  writeToFile('cats', catsJSON)

  
});

function writeToFile(fileName, data) {
  fs.writeFile(fileName + '.json', data, (err) => {
    if(err) {
      console.error(err);
    } else {
      console.log(fileName + 'stringify was successful');
    }
  });
}