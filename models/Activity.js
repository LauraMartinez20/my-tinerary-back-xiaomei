const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {type:String, required:true },
    photo: {type:String, required:true }, 
    itinerary: {type:mongoose.Types.ObjectId, ref:'itinerary'},
    
})
const Activity = mongoose.model(
    'activities',
    activitySchema
)

module.exports = Activity;