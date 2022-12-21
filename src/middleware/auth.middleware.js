//? Porteger las rutas para que solo usuarios con login activo puedan hacer peticiones
//? Desencriptar el token y agrearlo a req.user

const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtSecret = require('../../config').api.jwtSecret;

const { findUserById } = require('../users/users.controllers');

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey : jwtSecret
}

passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        //? done(error, tokenDecoded)
        try {
            const user = await findUserById(tokenDecoded.id)
            if(user) {    //? si el id del token pertenece a un usuario
                return done(null, tokenDecoded)    //?No existe un error, pero si un usario
            } else {
                return done(null, false)   //? No existe un error, pero tampoco el usuario
            }
        } catch (error) {
            return done(error, false) //? Si existe un error, pero no un usuario
        }
    })
);

module.exports = passport