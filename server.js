
const express = require('express');
// instantiate (define) the server
const app = express();




// tells server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3000!`);
});