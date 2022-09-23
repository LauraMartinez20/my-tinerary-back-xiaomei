require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const Comment = require('./models/Comment')

Comment.create (
    { comment :'Amazing place,special on spring is surrounded with tulips, and the park earby has an amazing environment',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa28'},

    { comment :'Great restaurant, amazing views, a little dull but worth the trip',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa29'},
    
    { comment :'perfect to go food tasting, and the relics displayed in the lower floors are incredible 10/10',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2a'},

    { comment :'Going there brought tears to my eyes, such a great monument',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2e'},

    { comment :'I love football and this stadium is perfect for the fan like us, had an amazing experience',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2f'},

    { comment :'It rained a little, but being able to experience the views has no equal',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa30'},

    { comment :'The most amazing casino I have visit in the word, and the display of the Lion King amazing',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa21'},

    { comment :'Walking in this old town and being able to see the wonderful clock is an amazing experience',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa1f'},

    { comment :'This city is peculiar and great, recommended to all the lovers of quirky architecture',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa20'},

    { comment :'getting lost in the bamboo forest made me feel like I was teleported to an ancient time, amazing andglorious',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa22'},

    { comment :'Seeing the 10000 gates with my own eyes was incredible, I want to return every time because of how wonderful it was',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa23'},

    { comment :'I love ruins and being able to imagine myself in the great Acropolis is one if the highlights of my life',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa24'},

    { comment :'This monument speak of the greatness of the ancient greece, simply wonderful',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa25'},

    { comment :'Great pyramids, too many camels',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa27'},

    { comment :'Not always you can say you visited one of the ancient wonders of the world by plane, totally worth it',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa26'},

    { comment :'You can see the entire city from the top of the mountain, is great, amazing experience, a little short but worth the visit',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2b'},

    { comment :'The combination of ancient history with the modern display of the graffiti makes the whole experience wonderful',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2d'},

    { comment :'Really one of the best food that I had tried is the colombian food, are a lot of differents kind of dishes, and its too delicious, I loved the empanadas',
    user :'63223132ad593d16eec7b4a1',
    itinerary : '6317c7514c5cbbfeb1e8fa2c'},

)