const passport = require ('passport')
const passportJWT = require ('passport-jwt')

const {KEY_JWT} = process.env // falta establecerlo
const User = require('../models/User')

passport.use(

    new passportJWT.Strategy( //estrategia de decodificacion : de donde viene el passle ordena que se extrae y de que forma
        { 
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(), //dode.exrtae.comseextrae
            secretOrKey: KEY_JWT //clave de validacion
        }, //esto returns  un objeto jwt_payload (data que seconfiguro en el token)
        async (jwt_payload,done) => {
            console.log(jwt_payload)
            try {
                let user = await User.findOne({_id:jwt_payload.id})
                console.log(user)

                if (user) {
                    user = {
                        id: user._id,
                        name:user.name,
                        email:user.email,
                        role: user.role,
                        photo: user.photo,
                    }
                    return done(null, user)
                }else {
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error, false)
                
            }

        }

    )
)
module.exports = passport