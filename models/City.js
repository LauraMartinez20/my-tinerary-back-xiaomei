const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    photo: {
        type: String, 
        required: true,
        validate: function (value) {
            if (! value.startsWith('http')) {
                throw new Error('La URL debe comenzar con http')
            }
        }
    },
    city: {
        type:String, 
        required:true,
        min: 4,
        max: 100,
    }, 
    country: {
        type:String,
         required:true,
         min: 4,
         max: 100,
     },
    details: {
        type:String,
        min: 5,
        max: 100,
    },
    intro: {
        type:String,
        min: 10,
        max: 100,
    },
    population: {
        type:Number,
         required:true,
         min: 1000,
         max: 100000000,
    }, 
    foundation: {
        type:Date ,
         required:true,
         min: 4,
         max: 4,
    },
    
})
const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City;
