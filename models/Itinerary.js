const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {
        type:String,
         required:true,
         min:4,
         max:100
    },
    user: {type:mongoose.Types.ObjectId, ref:'users'},
    city: {type:mongoose.Types.ObjectId, ref:'cities'}, 
    // comments: [{type:mongoose.Types.ObjectId, ref:'comment'}],

    price: {
        type:Number, 
        required:true,
        min:10,
        max:500
    },
    likes: {
        type:Array,
         required:true
    },
    tags: {
        type:Array,
         required:true,
    },
    duration: {
        type:Number,
         required:true,
         min:30,
         max:500
    },
    
    
})
const Itinerary = mongoose.model(
    'itinerary',
    itinerarySchema
)

module.exports = Itinerary;