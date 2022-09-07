require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const Activity = require('./models/Activity')

Activity.create (
   { name :'Oriel Tower Euromast',
    photo :'https://im.ge/i/OZtarL',
    itinerary : '6317c7514c5cbbfeb1e8fa29'},

    { name :' Depot Boijmans van Beuningen',
    photo :'https://im.ge/i/OZtlg1',
    itinerary : '6317c7514c5cbbfeb1e8fa28'},

    { name :'Markthal',
    photo :'https://im.ge/i/OZt70G',
    itinerary : '6317c7514c5cbbfeb1e8fa2a'},


    { name :'Christ redeemer',
    photo :'https://im.ge/i/OZtjfF',
    itinerary : '6317c7514c5cbbfeb1e8fa2e'},

    { name :'Maracana stadium',
    photo :'https://im.ge/i/OZtyIh',
    itinerary : '6317c7514c5cbbfeb1e8fa2f'},

    { name :'Angra dos Reis',
    photo :'https://im.ge/i/OZt88P',
    itinerary : '6317c7514c5cbbfeb1e8fa30'},

    { name :'Oriel Marina Bay Sands',
    photo :'https://im.ge/i/OZ3jfY',
    itinerary : '6317c7514c5cbbfeb1e8fa21'},


    { name :'Old Town Hall',
    photo :'https://im.ge/i/OZPV6F',
    itinerary : '6317c7514c5cbbfeb1e8fa1f'},


    { name :'Tourist Bus Tours',
    photo :'https://im.ge/i/OZAYip',
    itinerary : '6317c7514c5cbbfeb1e8fa20'},

    { name :'Arishiyama Bamboo Forest',
    photo :'https://im.ge/i/OZPBvD',
    itinerary : '6317c7514c5cbbfeb1e8fa22'},

    { name :'Fushimi Inari Shrine  The 10.000 gates',    
    photo :'https://im.ge/i/OZthEy',
    itinerary : '6317c7514c5cbbfeb1e8fa23'},

    { name :'Acropolis',
    photo :'https://im.ge/i/OZtn8G',
    itinerary : ' 6317c7514c5cbbfeb1e8fa24'},

    { name :'Poseidons temple”',
    photo :'https://im.ge/i/OZyS3h',
    itinerary : '6317c7514c5cbbfeb1e8fa25'},

    { name :'Guiza pyramid',
    photo :'https://im.ge/i/OZCVnh',
    itinerary : '6317c7514c5cbbfeb1e8fa27'},

    { name :'Luxor',
    photo :'https://im.ge/i/OZxO1Y',
    itinerary : '6317c7514c5cbbfeb1e8fa26'},
)