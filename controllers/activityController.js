const Activity = require('../models/Activity')
const Joi = require('joi')

const validator = Joi.object({
    "name": Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
        'any.required': 'NAME_REQUIRED',
        'string.min': 'NAME_TOO_SHORT',
        'string.max': 'NAME_TOO_LARGE',
    }),
    "photo":Joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'PHOTO_REQUIRED',
        'string.uri':'INVALID_URL'
    })  ,
})

const activityController = {

    create: async (req, res) => {
        const {
            name,
            photo,
            itinerary,
        } = req.body

        try {

            let result = await validator.validateAsync(req.body)
            
            await new Activity({ name, photo, itinerary, })

            res.status(201).json({
                message: 'Activity created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create activity",
                success: false
            })

        }
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let ActivityOne = await Activity.findOne({ _id: id },)

            if (ActivityOne) {

                res.status(200).json({
                    message: 'You get one activity',
                    response: ActivityOne,
                    success: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find activity",
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
    itinerary: async (req, res) => {
        console.log(req.query)
        let {id} = req.params

        let query = {}

        if (req.query.itineraries) {
            query.itinerary = req.query.itineraries //info that comes from front. 
        }

        console.log (query.itinerary)

        try {
            let itineraries = await Activity.find(query)
            .populate("itinerary", {name:1, photo:1})
            res.status(200).json({
                message: "itinerary found",
                response: itineraries,
                success: true
            })

        } catch (error) {

            console.log(error)
            res.status(400).json()
        }
    },


}

module.exports = activityController