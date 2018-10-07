const express = require('express');
var path = require('path');
const app = express();
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/study-girl";
mongoose.connect(db);


app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

var Girl = require('./models/girls');

app.get("/girl", function(req, res){
  Girl.find({}).exec(function(err, girl){
    if(err){
      console.log(err);
    } else{
      console.log(girl);
      res.send(girl);
    }
  })
})
//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})

// var girl1 = new Girl({
//     name: 'img1',
//     img: "https://bit.ly/2IttjqA",
// })
// var girl2 = new Girl({
//   name: 'img2',
//   img: 'https://bit.ly/2OqeH0I'
// })
// var girl3 = new Girl({
//   name: "img3",
//   img: "https://bit.ly/2xQ0PDt"
// })
// var girl4 = new Girl({
//   name: "img4",
//   img: "https://bit.ly/2E5i3SJ"
// })
// var girl5 = new Girl({
//   name: "img5",
//   img: "https://bit.ly/2C35t3Z"
// })
// girl1.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// girl2.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// girl3.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// girl4.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// girl5.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});