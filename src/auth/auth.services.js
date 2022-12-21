const jwt = require('jsonwebtoken');

const jwtSecret = require('../../config').api.jwtSecret;
const checkUserCredentials = require('./auth.controller');

const postLogin = (req, res) => {
    const {email, password } = req.body;
    if(email && password) {
        //? Si recibo email y password
        checkUserCredentials(email, password)
            .then( data => {
                if(data) {
                    const token = jwt.sign({
                        id: data.id ,
                        email: data.email,
                        role: data.role
                    }, jwtSecret)

                    res.status(200).json({
                        message: 'Correct Credentials',
                        token
                    })
                } else {
                    res.status(401).json({message: 'Invalid Credentials'})
                }
            })
            .catch( err => {
                res.status(400).json({ message: err.message });
            });
    } else {
        //! No recibo email y password
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                email: 'example@example.com',
                password: 'string'
            }
        });
    };
};

module.exports = {
    postLogin
}