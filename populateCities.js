require('dotenv').config()

//wer import the connectio to the data base
const db = require('./config/database')

//We import the models i need to make the operations
const City = require('./models/City')

Comment.create (
{
    "photo": "https://drive.google.com/file/d/11XZxNSQz920_6i-wfm_U7BguwpAi6Z5H/view?usp=sharing",
    "city": "San Francisco",
    "country": "United States of America",
    "details": "This city is one of the most iconic cities in USA, famous for its Golden Gate bridge, steep streets, Alcatraz and even one of the most beloved family sitcoms Full House.  This city has a great variety of cultural events like the San Francisco Festival of Gold, and the San Francisco Heritage Festival you are welcome to experience this city in all its wonderfulness!",
    "intro": "Enjoy the steep rolling hills and visit the Golden Gate Bridge",
    "population": 873965,
    "foundation": 1776
},

{
    "photo": "https://drive.google.com/file/d/1qOMbA2BT7AkgGgQjAQ8p-af41fL3C9Oz/view?usp=sharing",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "details": "This wonderful city started as a small port, that in the XXI became one of the fastest developed cities we have seen in modern days, it has a long weekend in Dubai is now 2.5 days: half a day from noon on Friday, plus Saturday and Sunday and there are no personal or income taxes in Dubai, having one of the famous land marks as the Burj Khalifa is a perfect destination if you like a warm weather and a modern city.",
    "intro": "Home of the Burj Khalifa",
    "population": 3515813,
    "foundation": 1822

},
{
    "photo": "https://drive.google.com/file/d/1C9uO_FX5HwlBTmuk46VNE3kcjzIrqqIL/view?usp=sharing",
    "city": "Luxenbourg City",
    "country": "Luxenbourg",
    "details": "Luxembourg is one of the smallest countries in the world, but it doesn't fall behind other countries in history, culture, and architecture. Having a romantic atmosphere you can taste-award winning wines in one of the safest countries in the world, walk through 17km of underground tunnels and submerge yourself in this European country. Come and visit it!",
    "intro": "The second richest country in the world",
    "population": 645397,
    "foundation": 1815
},


{
    "photo": "https://drive.google.com/file/d/1ipbA4-sKhvRp4Y9znmkzvtJbEdbzPWpE/view?usp=sharing",
    "city": "Bogota",
    "country": "Colombia",
    "details": "This city is known as the Athens of America because it's the center of education, finance, and culture just like Athens. Bogota is awesome place to visit as a tourist. There are more than 50 museums, 37 libraries, public squares, churches, and a ton of monuments, you must try its typical food and experience the warmth welcome of its citizens. You are more than welcome to visit!",
    "intro": "Find the charm historical places",
    "population": 7901653,
    "foundation": 1538
},

{
    "photo": "https://drive.google.com/file/d/1bQjqR5QZsGH3tHn498KNkCmOhwTq6VIa/view?usp=sharing",
    "city": "Kyoto",
    "country": "Japan",
    "details": "This city is known as Japan's spiritual heart. Full of ancient history, culture, and heritage you can visit up to 3000 temples and shrine, iconic ones like the Fushimi-Inari-Taisha considered national treasures. One is the best-preserved city in Japan is the perfect place to surround yourself with aetheric scenes and mystique. Come and discover this amazing destination.",
    "intro": "Discover the Buddhist temples and Shinto shrines",
    "population": 1464890,
    "foundation": 1889
},

)