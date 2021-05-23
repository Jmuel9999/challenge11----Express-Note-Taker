const router = require('express').Router();
const db = require('../db/db');
// fiel system
const fs = require('fs');

// get api/notes
router.get('/notes', function(req, res) {
    res.json(db);
});

// add to notes.html and db.json, return to client
router.post('/notes', function(req, res) {
    let request = req.body;
    // push request into notes
    notes.push(request);
    res.json(notes);
    //                                       specify file name and type we are writing to
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
});

module.exports = router;