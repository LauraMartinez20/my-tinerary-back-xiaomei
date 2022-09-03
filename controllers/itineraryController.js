const Itinerary = require('../models/Itinerary')

const itineraryController = {

    create: async (req, res) => {
        const {
            name,
            user,
            city,
            price,
            likes,
            tags,
            duration,
        }= req.body

        try {
            await new Itinerary({name, user, city, price, likes, tags, duration,})

            res.status(201).json({
                message: 'itinerary created',
                sucess: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create itinerary",
                sucess: false
            })
            
        }

    }, 

    update: async(req, res) => {
        const itinerary = req.body
        let {id} = req.params
    try {
        let updateItinerary = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new: true})
        res.status(200).json({
            message:"The itinerary was updated",
            response: updateItinerary,
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

    destroy: async(req, res) => {
        const itinerary =req.body
        let {id} = req.params
        try {
            let deleteItinerary = await Itinerary.findOneAndDelete({_id:id},itinerary,)
            res.status(200).json({
                message:"Itinerary deleted",
                success: true
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Itinerary not found",
                sucess: false
            })
        }
    }



}

module.exports = itineraryController