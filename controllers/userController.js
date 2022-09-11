const User = require('../models/User')



const userController = {

    create: async (req,res) => {
        const {
        name,
        lastName,
        mail,
        password,
        photo,
        country,
    } = req.body


    try {
        await new User({name,lastName, mail, password,photo,country,}).save()
    
        res.status(201).json({
            message: 'user created',
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "couldn't create user",
            success: false
        })
        
    }
}, 

read: async (req, res) => {
    const { id } = req.params
    try {
        let userOne = await User.findOne({ _id: id },)

        if (userOne) {

            res.status(200).json({
                message: 'You get one User',
                response: userOne,
                success: true
            })

        } else {
            res.status(404).json({
                message: "couldn't find User",
                success: false
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "",
            success: false
        })
    }
},

}



module.exports = userController


