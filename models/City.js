const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    photo: {
        type:String, 
        required:true,
    },
    city: {
        type:String, 
        required:true,
        min: 4,
        max:500,
    }, 
    country: {
        type:String, 
        required:true, 
        min: 4,
        max:500,
    },
    details: {
        type:String,
        min: 4,
        max:500,
    },
    intro: {
        type:String,
        min: 4,
        max:500,
    },
    population: {
        type:Number, 
        required:true
    }, 

    foundation: {
        type:Date , 
        required:true},

    
})
const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City;