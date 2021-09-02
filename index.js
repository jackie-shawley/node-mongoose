const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
});
//these are being set to handle some deprecation warnings


connect.then(() => {

    console.log('Connected correctly to server');

    //a different way to instantiate a campsite document from a Model (this way automatically saves the new instance):
    Campsite.create({
        name: 'React Lake Campground',
        description: 'test'
    })
    .then(campsite => {
        console.log(campsite);
        return Campsite.find();
    })
    .then(campsites => {
        console.log(campsites);
        return Campsite.deleteMany();
    })
    .then(()=> {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});