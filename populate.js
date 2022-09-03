
require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const User = require('./models/User')

User.create(
        {
            name: "Cinthya",
            lastName: " Di Risio",
            mail: "dirisioc@mail.com",
            password: "Kirito",
            photo: "https://im.ge/i/Ocuw4P",
            country: "Argentina",
        },
        {
            name: "Laura",
            lastName: "Martinez",
            mail: "martinezl@mail.com",
            password: "Felix",
            photo: "https://im.ge/i/OcuNs1",
            country: "Colombia",

        },

        {

            name: "Natalia",
            lastName: "Torres",
            mail: "torresn@mail.com",
            password: "Zeus",
            photo: "https://im.ge/i/Ocum3p",
            country: "Holanda",

        }

    )


//to call it in a new termial write: node populate.js