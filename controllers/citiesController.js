const City = require('../models/City')
const Joi = require('joi')

const validator = Joi.object({
    "photo": Joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'PHOTO_REQUIRED',
        'string.uri':'INVALID_URL'
    }),
    "city": Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
        'any.required': 'CITY_REQUIRED',
        'string.min': 'CITY_TOO_SHORT',
        'string.max': 'CITY_TOO_LARGE',
    }),
    "country": Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
        'any.required': 'COUNTRY_REQUIRED',
        'string.min': 'COUNTRY_TOO_SHORT',
        'string.max': 'COUNTRY_TOO_LARGE',
    }),
    "details": Joi.string()
    .min(5)
    .max(100)
    .messages({
        'any.required': 'DETAILS_REQUIRED',
        'string.min': 'DETAILS_TOO_SHORT',
        'string.max': 'DETAILS_TOO_LARGE',
    }),
    "intro": Joi.string()
    .min(10)
    .max(500)
    .messages({
        'any.required': 'INTRO_REQUIRED',
        'string.min': 'INTRO_TOO_SHORT',
        'string.max': 'INTRO_TOO_LARGE',
    }),
    "population": Joi.number()
    .required()
    .min(1000)
    .max(100000000)
    .messages({
        'any.required': 'POPULATION_REQUIRED',
        'string.min': 'POPULATION_TOO_SHORT',
        'string.max': 'POPULATION_TOO_LARGE',
    }),
    "foundation": Joi.number()
    .required()
    .min(4)
    .max(4)  
    .messages({
        'any.required': 'FOUNDATION_REQUIRED',
        'string.min': 'FOUNDATION_TOO_SHORT',
        'string.max': 'FOUNDATION_TOO_LARGE',
    })
})

const cityController = {

    create: async (req, res) => {
        const {
            city,
            country,
            details,
            intro,
            photo,
            population,
            foundation 
        } =     req.body // en e req.body estará toda la información y data  que el usurio enviará desde el front

        if (population) {
            population > 1000 & population < 100000000

            try {
                //Validamos antes de comunicarnos con el modelo
                let result = await validator.validateAsync(req.body)
            
 
                await new City({ city, country, details, intro, photo, population, foundation }).save() //función asyncrona por el await 

                res.status(201).json({ //configuramos la respuesta
                    message: 'city created',
                    success: true
                })
            } catch (error) {
                res.status(400).json({
                    message: "couldn't create event",
                    success: false
                })
            }
        }
    },

    all: async (req, res) => {
        console.log(req.query)
        let cities

        let query = {}

        if (req.query.population) {
            query.population = req.query.population
        }

        if (req.query.city) {
            query.city = req.query.city
        }

        if (req.query.country) {
            query.country = req.query.country
        }

        if (req.query.foundation) {
            query.foundation = req.query.foundation

        }

        try {
            if (query.city) {
                cities = await City.find({ city: { $regex: new RegExp("^" + req.query.city.toLowerCase(), "i") } })
            } else {
                cities = await City.find()
            }
            res.status(200).json({
                message: "City found",
                response: cities,
                success: true
            })

        } catch (error) {

            console.log(error)
            res.status(400).json()
        }
    },

    read: async (req, res) => {
        const { id } = req.params
        try {
            let cityOne = await City.findOne({ _id: id },)

            if (cityOne) {

                res.status(200).json({
                    message: 'You get one city',
                    response: cityOne,
                    success: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find city",
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
    update: async (req, res) => {
        const city = req.body
        let { id } = req.params
        try {
            let updateCity = await City.findOneAndUpdate({ _id: id }, city, { new: true })
            res.status(200).json({
                message: "The city was updated",
                response: updateCity,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },
    destroy: async (req, res) => {
        const city = req.body
        let { id } = req.params
        try {
            let deleteCity = await City.findOneAndDelete({ _id: id }, city,)
            res.status(200).json({
                message: "City deleted",
                success: true
            })

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "City not found",
                success: false
            })
        }
    }
}

module.exports = cityController