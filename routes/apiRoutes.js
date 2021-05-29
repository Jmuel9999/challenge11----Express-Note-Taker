const router = require('express').Router();
const path = require('path');
//const db = require('../db/db.json');
// fiel system
const fs = require('fs');

// shows saved notes
function readNotes() {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8'));
    return notes;
};

// get api/notes
router.get('/notes', function(req, res) {
    const notes = readNotes()
    res.json(notes);
});

// post to store notes
router.post('/notes', (req, res) => {
    const notes = 
});

// add something to do with id of each note here??
// add to notes.html and db.json, return to client
router.post('/notes', function(req, res) {
    let request = req.body;
    // push request into notes
    const notes = readNotes()
    notes.push(request);
    res.json(notes);
    //                                       specify file name and type we are writing to
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
});

module.exports = router;