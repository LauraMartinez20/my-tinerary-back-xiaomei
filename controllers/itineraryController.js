const Itinerary = require('../models/Itinerary')
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
    "price": Joi.number()
        .required()
        .min(100)
        .max(1000)
        .messages({
            'any.required': 'PRICE_REQUIRED',
            'string.min': 'PRICE_TOO_SHORT',
            'string.max': 'PRICE_TOO_MUCH',
        }),
    "likes": Joi.array()
        .required()
        .messages({
            'any.required': 'LIKES_REQUIRED',
        }),
    "tags": Joi.array()
        .required()
        .messages({
            'any.required': 'TAGS_REQUIRED',
        }),
    "duration": Joi.string()
        .required()
        .min(30)
        .max(500)
        .messages({
            'any.required': 'DURATION_REQUIRED',
            'string.min': 'DURATION_TOO_SHORT',
            'string.max': 'DURATION_TOO_LONG',
        }),
})

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
        } = req.body

        try {
            //Validamos antes de comunicarnos con el modelo
            let result = await validator.validateAsync(req.body)

            await new Itinerary({ name, user, city, price, likes, tags, duration, }).save()

            res.status(201).json({
                message: 'itinerary created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create itinerary",
                success: false
            })

        }

    },

    update: async (req, res) => {
        const itinerary = req.body
        let { id } = req.params
        try {

            let findItinerary = await Itinerary.findOne({ _id: id })

            if (findItinerary) {
                await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true }).save()
            res.status(200).json({
                message: "The itinerary was updated",
                response: updateItinerary,
                success: true
            })
            }
            } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },

    read: async (req, res) => {
        const { id } = req.params
        try {
            let ItineraryOne = await Itinerary.findOne({ _id: id },)

            if (ItineraryOne) {

                res.status(200).json({
                    message: 'You get one Itinerary',
                    response: ItineraryOne,
                    success: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find Itinerary",
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

    itineraries: async (req, res) => {
        console.log(req.query)
        let { id } = req.params

        let query = {}

        if (req.query.user) {
            query.user = req.query.user
            console.log(query.user)
        }
        if (req.query.city) {
            query.city = req.query.city
        }

        try {
            let users = await Itinerary.find(query)
                .populate("city", { name: 1, photo: 1 })
                .populate("user", { name: 1, photo: 1 })
            res.status(200).json({
                message: "query found",
                response: users,
                success: true
            })

        } catch (error) {

            console.log(error)
            res.status(400).json()
        }
    },
 
    
    likes: async (req, res) => {

        let { id } = req.params

        let userId = req.user.id

        try {
            let itinerary = await Itinerary.findOne({ _id: id })

            if (itinerary.likes.includes(userId)) {
                await Itinerary.findByIdAndUpdate({ _id: id }, { $push: { likes: userId } }, { new: true }).save()
                res.status(200).json({
                    message: 'Liked',
                    success: true
                })
            } else {
                await Itinerary.findByIdAndUpdate({ _id: id }, { $pull: { likes: userId } }, { new: true }).save()
                res.status(200).json({
                    message: 'Disliked',
                    success: true
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'error',
                success: 'false'
            })

        }

    },


    destroy: async (req, res) => {
        const itinerary = req.body
        let { id } = req.params
        try {
            let findItinerary = await Itinerary.find({ _id: id })

            if (findItinerary) {
                await Itinerary.findOneAndDelete({ _id: id }, itinerary,).save()
                res.status(200).json({
                    message: "Itinerary deleted",
                    success: true
                })

            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Itinerary not found",
                success: false
            })
        }
    }



}

module.exports = itineraryController