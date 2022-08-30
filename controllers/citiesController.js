const  City = require('../models/City')

const cityController = {
    create: async(req,res) => {
        const {city,country,photo,population,foundation} = req.body
        try {
            await new City(city,country,photo,population,foundation).save
            res.status(201).json({
                message: 'city created',
                sucess: true
            })
        } catch(error){
            res.status(400).json({
                message: "couldn't create event",
                sucess: false
            })
        }
    }
}

module.exports = cityController