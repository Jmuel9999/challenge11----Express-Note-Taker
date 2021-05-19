
const express = require('express');
// instantiate (define) the server
const app = express();

// brings up note taker homepage
app.get('/*', function(req, res) {
    res.sendFile('./public/index.html', {root: __dirname})
});

// link notes.html to the index.html "get started" button
app.get('/notes', function(req, res) {
    res.sendFile('/public/notes.html', {root: __dirname});
});

// tells server to listen for requests
app.listen(3000, () => {
    console.log(`API server now on port 3000!`);
});