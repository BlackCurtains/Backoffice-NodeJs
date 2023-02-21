const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qwxridh.mongodb.net/FruitsDb?retryWrites=true&w=majority`, function (err, db) {

 if (err) {
  console.log('Unable to connect to the server. Please start the server. Error:', err);
 } else {
  console.log('Connected to Server successfully!');
 }
});