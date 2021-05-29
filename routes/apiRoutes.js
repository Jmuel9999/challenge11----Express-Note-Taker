const router = require('express').Router();
const generateUniqueId = require('generate-unique-id');
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

// add to notes.html and db.json, return to client
router.post('/notes', function(req, res) {
    // create a unique id for each note
    const id = generateUniqueId();
    let request = req.body;
    // attach id to note, so user can bring up each saved note later on
    request.id = id;
    // push request into notes
    const notes = readNotes()
    notes.push(request);
    
    res.json(notes);
    //                                       specify file name and type we are writing to
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
});

module.exports = router;