require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const Activity = require('./models/Activity')

Activity.create (
//Bogota
 
//Candelaria
{ name :'Visit the Churges around La Candelaria',
    photo :'https://i.im.ge/2022/09/12/OGn2xa.Candelaria-churches.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2d'},

{ name :'Enjoy the Graffitis around the Candelaria',
    photo :'https://i.im.ge/2022/09/12/OeQtRW.Candelaria-graffiti.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2d'},

{ name :'Spook yourself with the ghost tours in the candelaria',
    photo :'https://i.im.ge/2022/09/12/OGnqdy.Candelaria-ghost-tours.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2d'},

//Monserrate 
{ name :'Enjoy the city  view in Monserrate',
    photo :'https://i.im.ge/2022/09/12/OGnafz.Monserrate-cityview.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2b'},

{ name :'Discover treasures in Monserrate stalls',
    photo :'https://i.im.ge/2022/09/12/OGnDu6.Monserrate-stores.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2b'},

{ name :'Pray at the Monserrate Church',
    photo :'https://i.im.ge/2022/09/12/OGnI9F.Monserrate-church.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2b'},

//Culinary Tours 

{ name :'Enjoy the Tamales Bogotanos',
    photo :'https://i.im.ge/2022/09/12/OGnL8K.Culinary-Tamales.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2c'},
{ name :'The Ajiaco is like no other food',
    photo :'https://i.im.ge/2022/09/12/OGnhQ9.Culinary-Ajiaco.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2c'},

{ name :'A Bogotan Tradicion, Chocolate with almohabana ',
    photo :'https://i.im.ge/2022/09/12/OGnjqM.Culinary-ChocolateAlmohabana.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2c'},


//rotterdam
//Euromast
   { name :'Sightseeingt the city',
    photo :'https://i.im.ge/2022/09/12/OGkVLm.Rott-Sightseeing-oriel-euromast.png',
    itinerary : '6317c7514c5cbbfeb1e8fa29'},


   { name :'Have an amazing lunch in the hotel',
    photo :'https://i.im.ge/2022/09/12/OGzewq.Euromast-Lunch.jpg',
    itinerary : '6317c7514c5cbbfeb1e8fa29'},


   { name :'Visit the Het Park In front of the tower',
    photo :'https://i.im.ge/2022/09/12/OGvT4m.Rott-Het-Park.png',
    itinerary : '6317c7514c5cbbfeb1e8fa29'},


// Boijmans

    { name :' Enjoy the surroundings of Depot Boijmans van Beuningen',
    photo :'https://im.ge/i/OZtlg1',
    itinerary : '6317c7514c5cbbfeb1e8fa28'},

 { name :' Explore the inside of Depot Boijmans van Beuningen',
    photo :'https://i.im.ge/2022/09/12/OGvRHW.Rott-bubble-inside.png',
    itinerary : '6317c7514c5cbbfeb1e8fa28'},

 { name :' Enjoy walking the Museum Park',
    photo :'https://i.im.ge/2022/09/12/OGJlG8.Rott-Museum-park.png',
    itinerary : '6317c7514c5cbbfeb1e8fa28'},


//Markthal

    { name :'Markthal culinary experiencce',
    photo :'https://i.im.ge/2022/09/12/OGJhvr.Markthal-inside.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2a'},

   { name :'Markthal Flower Tents',
    photo :'https://i.im.ge/2022/09/12/OGJmlc.Markthal-flowers.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2a'},

   { name :'Markthal Fortune Wheel',
    photo :'https://i.im.ge/2022/09/12/OGJyCJ.Markthal-fortunewheel.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2a'},

//brasil
//Christ Reedemer 

{ name :'Christ redeemer fly in an helicopter',
    photo :'https://im.ge/i/OZtjfF',
    itinerary : '6317c7514c5cbbfeb1e8fa2e'},

{ name :'Ride the cable car ',
    photo :'https://i.im.ge/2022/09/12/OGJx6z.Christ-cablecar.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2e'},

{ name :'Enjoy a meal in the Plague café',
    photo :'https://i.im.ge/2022/09/12/OGJgg9.Christ-plague.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2e'},

//Maracana Stadium
    { name :'Enjoy a match at the Maracana stadium',
    photo :'https://i.im.ge/2022/09/12/OGJZEh.Maracana-match.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2f'},

 { name :'Walk around the Maracana stadium',
    photo :'https://i.im.ge/2022/09/12/OGJkND.Maracana-surroundings.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2f'},

 { name :'Enjoy the nearby bars of Maracana stadium ',
    photo :'https://i.im.ge/2022/09/12/OGJzV4.Macarana-nearbar.png',
    itinerary : '6317c7514c5cbbfeb1e8fa2f'},


// Angra dos Reis

    { name :'Angra dos Reis enjoy the sightseeing',
    photo :'https://im.ge/i/OZt88P',
    itinerary : '6317c7514c5cbbfeb1e8fa30'},

    { name :'Enjoy the watersports at Angra dos Reis',
    photo :'https://i.im.ge/2022/09/12/OGJeJm.Angra-watersports.png',
    itinerary : '6317c7514c5cbbfeb1e8fa30'},

    { name :'Visit the waterfalls at Angra dos Reis',
    photo :'https://i.im.ge/2022/09/12/OGnluT.Angra-Waterfall.png',
    itinerary : '6317c7514c5cbbfeb1e8fa30'},


//singapore

    { name :'Enjoy the stay at the Marina Bay Sands',
    photo :'https://im.ge/i/OZ3jfY',
    itinerary : '6317c7514c5cbbfeb1e8fa21'},

 { name :'Visit the Casino Marina Bay Sands',
    photo :'https://i.im.ge/2022/09/12/OeQmt1.SIngapore-casino.png',
    itinerary : '6317c7514c5cbbfeb1e8fa21'},

 { name :'Go shopping at the Marina Bay Sands',
    photo :'https://i.im.ge/2022/09/12/OeQjqP.SIngapore-shopping.png',
    itinerary : '6317c7514c5cbbfeb1e8fa21'},

//Prague

    { name :'Old Town Hall',
    photo :'https://im.ge/i/OZPV6F',
    itinerary : '6317c7514c5cbbfeb1e8fa1f'},

//San Francisco 

    { name :'Tourist Bus Tours',
    photo :'https://im.ge/i/OZAYip',
    itinerary : '6317c7514c5cbbfeb1e8fa20'},

//Tokio

    { name :'Arishiyama Bamboo Forest',
    photo :'https://im.ge/i/OZPBvD',
    itinerary : '6317c7514c5cbbfeb1e8fa22'},

    { name :'Fushimi Inari Shrine  The 10.000 gates',    
    photo :'https://im.ge/i/OZthEy',
    itinerary : '6317c7514c5cbbfeb1e8fa23'},


//Greece 

    { name :'Acropolis',
    photo :'https://im.ge/i/OZtn8G',
    itinerary : '6317c7514c5cbbfeb1e8fa24'},

    { name :'Poseidons temple”',
    photo :'https://im.ge/i/OZyS3h',
    itinerary : '6317c7514c5cbbfeb1e8fa25'},

//Cairo

    { name :'Guiza pyramid',
    photo :'https://im.ge/i/OZCVnh',
    itinerary : '6317c7514c5cbbfeb1e8fa27'},

    { name :'Luxor',
    photo :'https://im.ge/i/OZxO1Y',
    itinerary : '6317c7514c5cbbfeb1e8fa26'},
)