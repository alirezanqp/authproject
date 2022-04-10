const express = require('express')
const router = express.Router()

const authRouter = require('./auth/index')


module.exports = (app) => {

    app.use('/api/auth', authRouter)

}