
// Step 1: Import Mongodb
const mongodb = require("mongodb");

// Step 2: Get URL
const url="mongodb+srv://test:test@cluster0.fapqz.mongodb.net/SLBookStore?retryWrites=true&w=majority"

// Step 3: Create Mongodb client
const mongoClient = mongodb.MongoClient;

// Step 4: Connect to mongodb

exports.connect = ()=>{
    mongoClient.connect(url)
    .then((client)=>{
        console.log("MongoDB is connected");
    })
    .catch(err=>{console.log(err)});
} 

// function connect(){
//     mongoClient.connect(ur).then()
// }