
require ('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const City = require('./models/City')


for(let i = 0; i < 12; i++) {
    City.create({
        photo: "http://localhost:4000/",
        city: "City",
        country: "Country",
        details: "Details",
        intro: "Intro",
        population: 100000,
        foundation: "1400"
    })
}

//to call it in a new termial write: node populate.js