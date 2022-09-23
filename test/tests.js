const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /signup', function () {
    this.timeout(10000)
   it('Must respond with the id', function (done) {
        request(app)
            .post('/auth/signup')
            .send({
                name:"Fenix",
                lastName:"Fenix",
                photo:"http://localhost:4000/images",
                email:"fenix123@email.com",
                password:"Fenix123",
                role:"user", 
                from:"google",
            })
            .then(response => {
                assert.isString(response.body.id)
                done()
        })
    })
})

describe('Patch/itinerary', function () {
    this.timeout(10000)
   it('The itinerary was update', function (done) {
        request(app)
            .patch('/itineraries/6317c7514c5cbbfeb1e8fa27')
            .send({
                price: 80,
            })
            .expect(200)
            .then(response => {
                assert.isNumber(response.body.price)
                return done()
            })
    })
    
})

describe('GET/itinerary from activity', function() {
    it('itinerary found', function(done) {
      request(app)
        .get('/activities')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  })
  describe('GET/city', function() {
    it('City not found', function(done) {
      request(app)
        .get('/cities/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done);
    })
  })
