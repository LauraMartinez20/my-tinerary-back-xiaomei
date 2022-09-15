const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {
        type:String,
         required:true,
         min: 4,
         max: 100, 
    },
    photo: {
        type:String, 
        required:true,
        validate: function (value) {
            if (! value.startsWith('http')) {
                throw new Error('La URL debe comenzar con http')
            }
        }
    }, 
    itinerary: {
        type:mongoose.Types.ObjectId, ref:'itinerary'
},
    
})
const Activity = mongoose.model(
    'activities',
    activitySchema
)

module.exports = Activity;