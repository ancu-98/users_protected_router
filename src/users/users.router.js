const router = require('express').Router()

const passport = require('../middleware/auth.middleware');

const userServices = require('./users.services')

router.get("/", userServices.getAllUsers) //? /api/v1/users
router.post("/", userServices.postUser) //? /api/v1/users

router.get("/:id" ,userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id', passport.authenticate('jwt', { session: false }), userServices.patchUser) //? /api/v1/users/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), userServices.deleteUser) //? /api/v1/users/:id

module.exports = router