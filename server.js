
const express = require('express');
// instantiate (define) the server
const app = express();
const db = require('./db/db.json');

// link notes.html to the index.html "get started" button
app.get('/notes', function(req, res) {
    res.sendFile('/public/notes.html', {root: __dirname});
});

// get data from db.json and return all notes
app.get('/api/notes', function(req, res) {
    res.json(db);
});

// add to notes.html and db.json, return to client
app.post('/api/notes', (req, res) => {
    
    //req.body.id = db.length.toString();
});

// brings up index.html
app.get('/*', function(req, res) {
    res.sendFile('/public/index.html', {root: __dirname})
});



// tells server to listen for requests
app.listen(3000, () => {
    console.log(`API server now on port 3000!`);
});