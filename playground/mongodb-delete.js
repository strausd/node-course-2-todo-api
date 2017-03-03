// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    
    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Users').deleteMany({name: 'Danny'}).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('58b5b4c3dc72b71e512a538b')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to find and delete document.');
        console.log(err);
    });
    
    // Ddb.close();
});