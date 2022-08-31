const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    photo: {type:String, required:true },
    city: {type:String, required:true }, 
    country: {type:String, required:true },
    details: {type:String},
    intro: {type:String},
    population: {type:Number, required:true}, 
    foundation: {type:Date , required:true},
    
})
const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City;