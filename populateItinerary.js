require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

const Itinerary = require('./models/Itinerary')

Itinerary.create (
    {
        name: "Piramids",
        user:"6313e735e3fe0c896f2ff2d8",
        city: "630ec4a2076b2a7c8197ce6a",
        price: 50000,
        likes: ["6313e735e3fe0c896f2ff2d8" ],
        tags: ["#pharaon", "Piramid", "Arabian nights"],
        duration: 3,
    }

)