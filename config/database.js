const mongoose = require('mongoose')

mongoose.connect(  
    process.env.MONGO_URL,
    {
        useUnifiedTopology:true, 
        useNewUrlParser:true,
    }
)
.then(()=>console.log('connected to database succesfully')) 
.catch (error => console.log(error))