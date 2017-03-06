// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58b6f987605b67e6dc84a687')
        
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58b5b283e5dc541e30068add')
    }, {
        $set: {name: 'Danny'},
        $inc: {age: -1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // db.close();
});