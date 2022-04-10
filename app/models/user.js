const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeStamp = require('mongoose-timestamp')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.plugin(timeStamp)

module.exports = mongoose.model('User', userSchema)