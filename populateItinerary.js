require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

const Itinerary = require('./models/Itinerary')

Itinerary.create (
    //1 Itinerary
    //Prague
    {
        name: 'Visit old Town Hall',
        user:'6313e735e3fe0c896f2ff2d8',
        city: '630ec42c076b2a7c8197ce5c',
        price: 90,
        likes: ['Good', 'Bad', 'Excelent' ],
        tags: ['Historical', 'Good plan', 'Fantastic'],
        duration: 90,
    },
    

    //San Franciso
    {
        name: 'Tourist bus Tour',
        user:'6313e735e3fe0c896f2ff2d6',
        city: '630ec436076b2a7c8197ce5e',
        price: 70,
        likes: ['Good', 'Bad', 'Excelent'  ],
        tags: ['good places', 'great', 'fantastic tour'],
        duration: 120,
    },


    //Singapore
    {
        name: 'Oriel Marina Bay Sands',
        user: '6313e735e3fe0c896f2ff2d7',
        city: '630ec42c076b2a7c8197ce5c',
        price: '50',
        likes:['Good', 'Bad', 'Excelent'],
        tags: ['amazing view', 'peaceful', 'awesome'],
        duration:120
        },
// 2 Itineraries 
//Kyoto 
{
    name: 'Arishiyama Bamboo Forest',
    user: '6313e735e3fe0c896f2ff2d8',
    city: '630ec48c076b2a7c8197ce68',
    price: '3',
    likes:['Good', 'Bad', 'Excelent'],
    tags: ['good place', 'peaceful', 'interesting experience'],
    duration:160,
    },
    {
    name: 'Fushimi Inari Shrine, The 10.000 gates',
    user: '6313e735e3fe0c896f2ff2d7',
    city: '630ec48c076b2a7c8197ce68',
    price: '53',
    likes:['Good', 'Bad', 'Excelent'],
    tags: ['awesome experience', 'great place', 'fantastic'],
    duration:180
    },


//Athens
{
    name: 'Tour in the Acropolis',
    user:'6313e735e3fe0c896f2ff2d6',
    city: '630ec48c076b2a7c8197ce68',
    price: 60,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: ['awesome', 'historic', 'popular'],
    duration: 120,
},
{
    name: 'Watch the sunset in the Poseidons temple',
    user:'6313e735e3fe0c896f2ff2d7',
    city: '630ec48c076b2a7c8197ce68',
    price: 50,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: ['Beautiful', 'fantastic view', 'relaxing'],
    duration: 90,
},


//Cairo
{
    name: 'Visit Luxor by Plane',
    user:'6313e735e3fe0c896f2ff2d8',
    city: '630ec4a2076b2a7c8197ce6a',
    price: 500,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: ['pharaon', 'historical', 'Arabian nights'],
    duration: 3,
},
{
    name: 'Tour in Guiza pyramids',
    user:'6313e735e3fe0c896f2ff2d6',
    city: '630ec4a2076b2a7c8197ce6a',
    price: 90,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: ['awesome', 'historic', 'great place'],
    duration: 60,
},

//3 Itineraries 

//Rotterdam
{
    name: 'Digital Art Museum',
    user:'6313e735e3fe0c896f2ff2d8', //Nat
    city: '630ea6400af8f9c24ba0a54b',
    price: 23.86,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: ['Art', 'culture', 'Digital'],
    duration: 60,
},
{
    name: 'Oriel Tower Euromast',
    user:'6313e735e3fe0c896f2ff2d6', //Cin
    city: '630ea6400af8f9c24ba0a54b',
    price: 52.82,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: ['Restaurant', 'Observation', 'Monument'],
    duration: 50,
},
{
    name: 'Markthal',
    user:'6313e735e3fe0c896f2ff2d7', //Lau
    city: '630ea6400af8f9c24ba0a54b',
    price: 83.22,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: ['Restaurant', 'Relics', 'Modern'],
    duration: 50,
},


//Bogota 
{
    name: 'Climb Monserrate',
    user:'6313e735e3fe0c896f2ff2d7',
    city: '630ec470076b2a7c8197ce64',
    price: 30,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: [ 'good view', 'exhausting', 'good place'],
    duration: 180,
},
{
    name: 'Coulinary Tours',
    user:'6313e735e3fe0c896f2ff2d6',
    city: '630ec470076b2a7c8197ce64',
    price: 50,
    likes: ['Good', 'Bad', 'Excelent' ],
    tags: [ 'delicious', 'great food', 'tipical'],
    duration: 200,
},
{
    name: 'Tour ofgraffiti and uran art in Candelaria',
    user:'6313e735e3fe0c896f2ff2d8',
    city: '630ec470076b2a7c8197ce64',
    price: 35,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: ['interesting', 'good tour', 'great art'],
    duration: 130,
},


//Rio de Janeiro
{
    name: 'Climb the Christ redeemer',
    user:'6313e735e3fe0c896f2ff2d8',
    city: '630ec352076b2a7c8197ce58',
    price: 50,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: [ 'awesome view', 'interesting', 'long trayect journey'],
    duration: 120,
},
{
    name: 'Meet Macarana Stadium',
    user:'6313e735e3fe0c896f2ff2d6',
    city: '630ec352076b2a7c8197ce58',
    price: 25,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: [ 'exciting', 'great experience', 'good guidebook'],
    duration: 20,
},
{
    name: 'Board tour around Angra dos Reis',
    user:'6313e735e3fe0c896f2ff2d7',
    city: '630ec352076b2a7c8197ce58',
    price: 60,
    likes: ['Good', 'Bad', 'Excelent'],
    tags: [ 'good views', 'awesome tour', 'interesting'],
    duration: 44,
},

)