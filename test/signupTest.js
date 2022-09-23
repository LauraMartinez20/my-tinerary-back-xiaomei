/*const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /signup', function () {
    this.timeout(10000)
   it('User signed up from', function (done) {
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
            .expect(200, done)
    })
})
    describe('POST /signup', function() {
        this.timeout(10000)
        it('Must respond with 200 status code', function (done) {
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
                .expect(200, done)
    
        })
    })
    describe('POST /signup', function() {
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
    })*/

