/*const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /cities', function () {
    this.timeout(10000)
    it('Must respond with the id', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Rio de Janeiro",
                country: "Brasil",
                details: "The best place to visit and good experience",
                intro: "Its a really good city",
                photo: "http://localhost:4000/images",
                population: 5000,
                foundation: 1994,
            })
            .then(response => {
                assert.isString(response.body.id)
                done()
            })
    })

   /* it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Rio de Janeiro",
                country: "Brasil",
                details: "The best place to visit and good experience",
                intro: "Its a really good city",
                photo: "http://localhost:4000/images",
                population: 5000,
                foundation: 1999,
            })
            .expect(201, done)

    })
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})

*/