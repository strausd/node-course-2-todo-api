// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('58b6ed312926182144fff43a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    db.collection('Users').find({name: 'Danny'}).toArray().then((doc) => {
        console.log('User');
        console.log(JSON.stringify(doc, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch user. \n', err);
    });
    
    // Ddb.close();
});