const User = require('../models/User')
const crypto = require('crypto') //codigo que antes se tenia que installar y es nativo de node y se usa para tener mayor seguridad en claves
const bcryptjs = require('bcryptjs') //trasforma contraeña en hash
const sendMail = require('./sendMail')
const Joi = require('joi')

const validator = Joi.object({
    "from": Joi.string(),

    "role": Joi.string(),

    "name": Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
        'any.required': 'NAME_REQUIRED',
        'string.min': 'NAME_TOO_SHORT',
        'string.max': 'NAME_TOO_LARGE',
    }),
    "lastName": Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
        'any.required': 'LAST_NAME_REQUIRED',
        'string.min': 'LAST_NAME_TOO_SHORT',
        'string.max': 'LAST_NAME_TOO_LARGE',
    }),
    "photo": Joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'PHOTO_REQUIRED',
        'string.uri':'INVALID_URL'
    }),
    "email": Joi.string()
    .required()
    .messages({
        'any.required': 'EMAIL_REQUIRED',
    }),
    "password": Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .messages({
        'any.required': 'PASSWORD_REQUIRED',
        'string.min': 'PASSWORD_TOO_SHORT',
        'string.max': 'PASSWORD_TOO_LARGE',
    }),


})

const userController = {

    signUp: async (req, res) => {
        let {
            name,
            lastName,
            photo,
            email,
            password,
            role, //rolfromfront
            from, //from fromfront paraavisar a metodo des de donde se crea el usuario 

        } = req.body

        try {
             //Validamos antes de comunicarnos con el modelo
             let result = await validator.validateAsync(req.body)
             
            let user = await User.findOne({ email })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto //se invoca el generador de codigo
                    .randomBytes(15) //metodo para que tiee que tener 15 digitos //el numero 15 son el tamaño del codigo aleatoreio que crypto asigna
                    .toString('hex') //metodo para avisar que tiene que ser hexagesimal

                if (from === 'form') { //si viene de formulario de registro
                    password = bcryptjs.hashSync(password, 10) //metodo hashsync que necesita 2 parametros contraseña y nivel seguridad que requiere
                    let user = await new User({ name, lastName, email, photo, password: [password], role, from: [from], logged, verified, code }).save()
                    sendMail(email, name, photo, code)
                    res.status(201).json({
                        message: "User signed up from form",
                        success: true,
                        id: user._id
                    })
                } else { //si viene de otra fuente 

                    password = bcryptjs.hashSync(password, 10)
                    //metodo hashsync que necesita 2 parametros contraseña y nivel seguridad que requiere
                    let verified = true
                    user = await new User({ name, lastName, email, photo, password: [password], role, from: [from], logged, verified, code }).save()
                    //hay que incorporar el mail para envio de verificacion 
                    res.status(201).json({
                        message: "User signed up from" + from,
                        success: true,
                        
                    })

                }
            } else {
                if (user.from.includes(from)) { //si propiedadfrom  del usuario el valor from 
                    // essi el usuario esta en [google, facebook etc]
                    res.status(200).json({
                        message: 'user already exists',
                        success: false // porque no tien exito en la creacion del usuario porque este ya existe
                    })
                } else { // ==> uawe.from [fgoogle]
                    user.from.push(from) //vinculo la nueva forma de registro al usuario encontrado mediante un push a from
                    user.verified = true //si usuario tiene registros previos signifiva que ya se verifico en registros previos. 
                    user.password.push(bcryptjs.hashSync(password, 10))
                    await user.save() //se guarda el usuario isn tener que volve ra crear el comando, actualiza el usuario
                    res.status(201).json({
                        message: "User signed up from" + from,
                        success: true
                    })
                }

            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "couldn't sign up",
                success: false
            })
        }

    },
    //El código único y aleatorio creado en sendMail se pasa por params a este método para verificar la cuenta
    //luego de requerirlo, lo comparamos con los perfiles ya creados (Se busca en base de datos)
    signIn: async (req, res) => {
        const { email, password, from} = req.body

        try {

            

            const user = await User.findOne({ email })
            if (!user) { // si usuario no existe
                res.status(404).json({
                    success: false,
                    message: 'User not found, please sign up',
                })
            } else if (user.verified) { //si usuario existe y esta verificado

                const checkPassword = user.password.filter(passwordElement => bcryptjs.compareSync(password, passwordElement)) //comparamos el pass con hash y sin hash para ver si lleganal mismoresutado

                if (from == 'form') { //usuario ingresa por form

                    if (checkPassword.length > 0) { //si contrasela coincide

                        const loginUser = {
                            id: user._id,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo:user.photo
                            
                            
                        }

                        user.logged = true
                        await user.save() //se cambia el logged true del usuario

                        res.status(200).json({
                            sucess: true,
                            response: {user: loginUser, },
                            message: 'Welcome' + user.name
                        })
                    } else { //si contraseña no coincide
                        res.status(400).json({
                            sucess: false,
                            message: 'User name or password is not correct'
                        })
                    }

                } else { // usuario ingresa por redes sociales
                    if (checkPassword.length > 0) { //si contrasela coincide

                        const loginUser = {
                            id: user._id,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo:user.photo,
                        }

                        user.logged = true
                        await user.save() //se cambia el logged true del usuario

                        res.status(200).json({
                            sucess: true,
                            response: 'user: loginUser',
                            message: 'Welcome' + user.name
                        })
                    } else { //si contraseña no coincide
                        res.status(400).json({
                            sucess: false,
                            message: 'User name or password is not correct'
                        })
                    }
                }


            } else { // si usuario existe y NO esta verificado
                res.status(401).json({
                    sucess: false,
                    message: 'Verify your email account and try again'
                })

            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                sucess: false,
                    message: 'Uh oh something is wrong, try again'

            })

        }
    },


    verifyMail: async (req, res) => {
        const { code } = req.params

        let user = await User.findOne({ code: code })//nombre propiedad=nombre variable

        try {
            if (user) {
                user.verified = true
                await user.save()
                res.redirect('https://localhost:3000/cities') //link de redireccionamiento
            } else {
                res.status(404).json({
                    message: "email doesn't has an account yet",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "account could not be verified",
                success: false
            })

        }
    },



    signOut: async (req, res) => { 
        const { email } = req.body

        try {
            const user = await User.findOneAndUpdate({ email: email })
            if(user.logged == true) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    message: "Logged out succesfully",
                    success: true
                })
            }else {
                res.status(400).json({
                    message: "User is not logged in",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "sign out error please try again.",
                success: false
            })
            
        }
    }, //findOneandUpdate y cambiar de true a false



}



module.exports = userController



//old code where user was artificially created


/* create: async (req, res) => {
    const {
        name,
        lastName,
        mail,
        password,
        photo,
        country,
    } = req.body


    try {
        await new User({ name, lastName, mail, password, photo, country, }).save()

        res.status(201).json({
            message: 'user created',
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "couldn't create user",
            success: false
        })

    }
},

read: async (req, res) => {
    const { id } = req.params
    try {
        let userOne = await User.findOne({ _id: id },)

        if (userOne) {

            res.status(200).json({
                message: 'You get one User',
                response: userOne,
                success: true
            })

        } else {
            res.status(404).json({
                message: "couldn't find User",
                success: false
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "",
            success: false
        })
    }
},*/




