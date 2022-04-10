const User = require('../../models/user')
const bcrypt = require('bcrypt')
const { sign } = require('../../services/TokenService');


module.exports = new class {

    async register(req, res) {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ data: user, msg: 'user is alerdy' })
        }

        const { email, name, password } = req.body
        user = new User({
            email,
            name,
            password
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        await user.save()

        res.status(200).json({
            // delete pass in data
            data: user,
            msg: 'user succefuly registered'
        })
    }

    async login(req, res) {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({ msg: 'invalid email or password' })
        }
        
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if (!isValid) {
            return res.status(400).json({  msg: 'invalid email or password' })
        }
        const token = sign({_id: user.id})
        res.status(200).json({
            status: 'success',
            data: {
                token
            }
        })
    }
    async usersList (req, res) {
        const users = await User.find()
        res.send({
            users
        })
    }
};