
require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const User = require('./models/User')

User.create(
        {
            name: "Cinthya",
            lastName: " Di Risio",
            email: "dirisioc@mail.com",
            password: "Kirito",
            photo: "https://i.im.ge/2022/09/04/Ocuw4P.Cindy.png",
            role: "user",
            from: "form",
            logged:false,
            verified: true,
            code:"c346ddd705b5887a638d87569f020e"
        },
        {
            name: "Laura",
            lastName: "Martinez",
            email: "martinezl@mail.com",
            password: "Felix",
            photo: "https://i.im.ge/2022/09/04/OcuNs1.Lau.png",
            role: "user",
            from: "form",
            logged:false,
            verified: true,
            code:"c346ddd705b5887a638d87569f019e"

        },

        {

            name: "Natalia",
            lastName: "Torres",
            email: "torresn@mail.com",
            password: "Zeus",
            photo: "https://i.im.ge/2022/09/04/Ocum3p.Nati.png",
            role: "user",
            from: "form",
            logged:false,
            verified: true,
            code:"c346ddd705b5887a638d87569f017e"

        }

    )


//to call it in a new termial write: node populate.js