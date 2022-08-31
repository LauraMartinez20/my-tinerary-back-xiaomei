const  City = require('../models/City')

const cityController = {

    create: async(req,res) => {
        const {city,country ,details, intro, photo, population, foundation} = req.body
        try {
            await new City({city,country, details, intro,photo,population,foundation}).save()
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
    },
    all: async(req,res)=>{
        let cities 

        let query = {}

        if (req.query.population){
            query.population = req.query.population
        }
        if (req.query.city){
            query.city = req.query.city
        }

        try {
            cities = await cities.find(query)
            res.json('hola')

        } catch (error) {
            
            console.log(error)
            res.estatus(400).json()
        }
    },

    read: async(req,res) => {
        const {id} = req.params
        try {
            let cityOne = await City.findOne({_id:id})

            if(cityOne){
                res.status(200).json({
                    message: 'You get one city',
                    response: cityOne, 
                    sucess: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find city",
                    sucess: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "",
                sucess: false
            })   
        }
    },
    update: async(req, res) => {
            const city = req.body
            let {id} = req.params
        try {
            let updateCity = await City.findOneAndUpdate({_id:id},city,{new: true})
            res.status(200).json({
                message:"The city was updated",
                response: updateCity,
                sucess: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message:"error",
                success: false
            })
            
        }
    },
    destroy: async (req,res) => {
        const city =req.body
        let {id} = req.params
        try {
            let deleteCity = await City.findOneAndDelete({_id:id},city,)
            res.status(200).json({
                message:"City deleted",
                success: true
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "City not found",
                sucess: false
            })
        }
    }
} 

module.exports = cityController