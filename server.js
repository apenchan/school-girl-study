const express = require('express');
var path = require('path');
const app = express();
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/study-girl";
mongoose.connect(db);


app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});