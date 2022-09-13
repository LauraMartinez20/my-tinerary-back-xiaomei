const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({ //Declaramos un esquema
    comment: {type:String, required:true },
    user: {type:String,}, 
    itinerary: {type:String,},
    
})
const Comment = mongoose.model(
    'comment',
    commentSchema
)

module.exports = Comment;