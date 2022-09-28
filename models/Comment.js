const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({ //Declaramos un esquema
    comment: {
        type:String,
         required:true,
         min:10,
         max:100
    },
    user: {type:mongoose.Types.ObjectId, ref:'users'},
    itinerary:{type:mongoose.Types.ObjectId, ref:'itinerary'}
    
})
const Comment = mongoose.model(
    'comments',
    commentSchema
)

module.exports = Comment;