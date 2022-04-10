const express = require('express')
const auth = require('../../middlewares/auth')
const router = express.Router()

const { register, login, usersList } = require('./controller')
const { registerValidator, loginValidator, validate } = require('./validator')

router.get('/users', [auth], usersList)
router.post('/register', registerValidator(), validate, register)
router.post('/login', loginValidator(), validate, login)

module.exports = router