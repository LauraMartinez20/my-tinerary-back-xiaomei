const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER} =  process.env//=>process.env es el objeto que tiene las variables de entorno de google

const sendMail = async (email,code) =>{ // asincrona porque dependerá de las respuestas de la api de google

    const client = new OAuth2( //crear cliente de google-OAuth crea una credencial de cliente
        process.env.GOOGLE_ID,
        process.env.GOOGLE_SECRET,
        process.env.GOOGLE_URL,
    )

    client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
    })  //configuracion nque se tiene para tener la credecial

    const accessToken = client.getAccessToken()  //se utiliza para calcular el refreshtoken

    const transport  = nodemailer.createTransport({
        service: 'gmail', //servicio de mensajeria
        auth: {
            user:  GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refresh_token: GOOGLE_REFRESH,
            accessToken: accessToken 
        },
        tls:{
            rejectUnauthorized: false //para evitar que bloquee el antivirus
        }
    })
    const emailOptions = {
        from: GOOGLE_USER,
        to: email,
        subject: 'verify my tinerary account',
        html: `
        <div> 
        <div>
                <h1>Hello  ${mail}</h1>
                <p>click the next link to verify your account.</p>
                <a href='http://localhost:8000/auth/verify/${code}'>click to verify!</a>
            </div>`//enviar link hacia una página para verificar el mail MÉTODO DEL CONTROLADOR VERIFYMAIL PARA CAMBIAR EL BOOLEANO DE VERIFIED
    }
    await transport.sendMail(emailOptions, (error,response)=>{
        if(error){
            console.log(error)
        } else {
            console.log('ok')
        }
    })

}

module.exports = sendMail