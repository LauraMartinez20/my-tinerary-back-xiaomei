const User = require('../models/User')
const crypto = require('crypto') //codigo que antes se tenia que installar y es nativo de node y se usa para tener mayor seguridad en claves
const bcryptjs = require('bcryptjs') //trasforma contraeña en hash


const userController = {

    signUp: async (req, res) => {
        let {
            name,
            lastName,
            photo,
            email,
            password,
            country,
            role, //rolfromfront
            from, //from fromfront paraavisar a metodo des de donde se crea el usuario 

        } = req.body

        try {

            let user = await User.findOne({ email })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto //se invoca el generador de codigo
                    .randomBytes(15) //metodo para que tiee que tener 15 digitos //el numero 15 son el tamaño del codigo aleatoreio que crypto asigna
                    .toString('hex') //metodo para avisar que tiene que ser hexagesimal

                if (from === 'form') { //si viene de formulario de registro
                    password = bcryptjs.hashSync(password, 10) //metodo hashsync que necesita 2 parametros contraseña y nivel seguridad que requiere
                    user = await new User({ name, lastName, email, country, photo, password: [password], role, from :[from], logged, verified, code }).save()
                    //hay que incorporar el mail para envio de verificacion 
                    res.status(201).json({
                        message: "User signed up from form",
                        success: true
                    })
                } else { //si viene de otra fuente 

                    password = bcryptjs.hashSync(password, 10)
                     //metodo hashsync que necesita 2 parametros contraseña y nivel seguridad que requiere
                    let verified = true
                    user = await new User({ name, lastName,email, country, photo, password: [password], role, from :[from], logged, verified, code }).save()
                    //hay que incorporar el mail para envio de verificacion 
                    res.status(201).json({
                        message: "User signed up from" + from,
                        success: true
                    })

                }
            }else{
                if(user.from.includes(from)){ //si propiedadfrom  del usuario el valor from 
                                            // essi el usuario esta en [google, facebook etc]
                    res.status(200).json({
                        message: 'user already exists',
                        success: false // porque no tien exito en la creacion del usuario porque este ya existe
                    })
                }else{ // ==> uawe.from [fgoogle]
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

    verifyMail: async (req, res) => { },

    signIn: async (req, res) => { },

    signOut: async (req, res) => { }, //indOneandUpdate y cambiar de true a false

    

}



module.exports = userController



//old code that user was artificially created


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


