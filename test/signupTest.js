const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /signup', function () {
    this.timeout(10000)
   it('Must respond with the id', function (done) {
    this.timeout(10000)
        request(app)
            .post('/signup')
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

    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send({
                name:"Seuz",
                lastName:"Seuz",
                photo:"https://locahost/4000/photo",
                email:"seuz123@gmail.com",
                password:"hola213",
                role:"user",
                from:"form",
            })
            .expect(201, done)

    })
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})

