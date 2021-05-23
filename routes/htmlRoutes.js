const path = require('path');
const router = require('express').Router();

// link notes.html to the index.html "get started" button
router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// brings up index.html
router.get('*', function(req, res) {
    // dirname references the path of file
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

module.exports = router;