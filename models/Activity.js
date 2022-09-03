const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {type:String, required:true },
    photo: {type:String, required:true }, 
    itinerary: {type:String,},
    
})
const Activity = mongoose.model(
    'activity',
    activitySchema
)

module.exports = Activity;