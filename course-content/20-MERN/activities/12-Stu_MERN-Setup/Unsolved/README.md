# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:


```json
"scripts": {
  "start": "node server/server.js",
  starts the server one, wont look for update on file saves
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  actively updates server as changes are made to files
  "install": "cd server && npm i && cd ../client && npm i",
  installs
  "seed": "cd server && npm run seed",
  seeds database
  "build": "cd client && npm run build"
  only builds the client
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:
creates a proxy for the user to connect to
```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:
if the current node environment is in production then use the client build files in express static

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:
send the user the index html page from client/build


```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
