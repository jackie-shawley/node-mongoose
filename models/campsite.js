const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//timestamps will automatically add two properties: createdAt and updatedAt; this (or any second argument) argument is optional for the Schema

const Campsite = mongoose.model('Campsite', campsiteSchema); //this returns a Constructor Function

module.exports = Campsite;