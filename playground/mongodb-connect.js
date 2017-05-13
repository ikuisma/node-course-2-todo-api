// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //     text: "Something to do.",
  //     completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to MongoDB database.')
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, locationstring)
  // db.collection('Users').insertOne({
  //   name: "Paavo",
  //   age: 25,
  //   location: "Helvetten"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user.');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp())
  // });
  db.close();
});
