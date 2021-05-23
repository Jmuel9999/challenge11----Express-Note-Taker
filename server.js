
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3000;
// instantiate (define) the server
const app = express();


// bring in express package and MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use api routes
app.use('/api', apiRoutes);
// Always the last route to add
app.use('/', htmlRoutes);


// get data from db.json and return all notes
// app.get('/api/notes', function(req, res) {
//     res.json(db);
// });



// tells server to listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});