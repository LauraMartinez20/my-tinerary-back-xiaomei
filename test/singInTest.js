/*const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /signin', function () {
    this.timeout(10000)
   it('User name or password is not correct', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                email:"danielamartinez1012@gmail.com", 
                password:"Fenix123", 
                from:"google",
            })
            .expect(400, done)
    })
})
    describe('POST /signin', function() {
        this.timeout(10000)
        it('Must respond with 200 status code', function (done) {
            request(app)
                .post('/auth/signin')
                .send({
                    email:"danielamartinez1012@gmail.com", 
                    password:"117037936482286190934", 
                    from:"google",
                })
                .expect(200, done)
    
        })
    })
    describe('POST /signin', function() {
        this.timeout(10000)
        it('Must respond with 404 status code', function (done) {
            request(app)
                .post('/auth/signin')
                .send({})
                .expect(404)
                .end(function (err, res) {
                    if (err) return done(err);
                    return done();
                })
        })
    })
*/