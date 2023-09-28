// get a handle to the mongoose library
const mongoose = require('mongoose');

// connect our mongoose object to a data base
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// Create the Schema for the fruits data base
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  review: String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = new mongoose.model("Person", personSchema);

const watermelon = new Fruit({
  name: "Watermelon",
  rating: 9,
  review: "Can be really good or quite bad"
});

// watermelon.save()

// Person.updateOne({name: "John"}, {favoriteFruit: watermelon}, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 9,
//   review: "Apples are fire"
// });
// fruit.save();

// const person = new Person({
//   name: "John",
//   age: 37
// });
// person.save();

// const orange = new Fruit({
//   name: "Orange",
//   rating: 7,
//   review: "Sweet and good texture but sticky"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 5,
//   review: "Taste is okay, but the texture makes me gag"
// });

// Fruit.insertMany([orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    // closes the mongoose connection after we have gotten the data
    fruits.forEach((fruit => {
      console.log(fruit.name);
    }));
  }
});

// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted")
//   }
// });

// Person.deleteMany({name: "John"}, (err) => {});


// const MongoClient = require("mongodb").MongoClient;
//  // Replace the uri string with your connection string.
//  const uri =
//    "mongodb://127.0.0.1:27017";
//  const client = new MongoClient(uri);
//  const dbName = "fruitsDB"
// async function run() {
//    try {
//     await client.connect();
//     const db = client.db(dbName);
//     const fruits = db.collection('fruits');
//     console.log("Connected successfully to server");
//     const docs = [
//       {
//         name: "Apple",
//         score: 8,
//         review: "Great Fruit"
//       },
//       {
//         name: "Orange",
//         score: 7,
//         review: "Good Fruit"
//       },
//       {
//         name: "Banana",
//         score: 7,
//         review: "Bleh Fruit"
//       }
//     ];
//     const options = { ordered: true };
//     const result = fruits.insertMany(docs, options);
//     // console.log("Connected successfully to server");
//      // console.log(`A document was inserted with the _id: ${result.insertedCount}`);
//      // const movies = database.collection('movies');
//      // // Query for a movie that has the title 'Back to the Future'
//      // const query = { title: 'Back to the Future' };
//      // const movie = await movies.findOne(query);
//      // console.log(movie);
//    } finally {
//      // Ensures that the client will close when you finish/error
//      await client.close();
//    }
//  }
//  run().catch(console.dir);