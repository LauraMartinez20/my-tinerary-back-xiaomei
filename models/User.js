const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
         required:true,
         min:4,
         max:100
    },
    lastName: {
        type:String,
         required:true,
         min:4,
         max:100
     }, 
    email: {
        type:String,
         required:true 
    },
    password: [{
        type:String, 
        required:true 
    }],
    photo: {
        type: String, 
        required: true,
        validate: function (value) {
            if (! value.startsWith('http')) {
                throw new Error('La URL debe comenzar con http')
            }
        }
    },
    role: {
        type:String,
         required:true
     }, 
    country: {
        type:String
    }, 
    from: [{
        type:String,
         required:true
     }], 
    logged: {
        type:Boolean,
         required:true 
    }, 
    verified: {
        type:Boolean,
         required:true 
    },
    code: {
        type:String,
         required:true 
    }
    
})
const User = mongoose.model(
    'users',
    userSchema
)

module.exports = User;