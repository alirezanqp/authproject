const jwt = require('jsonwebtoken')

class TokenService {
    sign(data){
        return jwt.sign(data, process.env.APP_SECRET)
    }

    verify(token){
        try {
            const payload = jwt.verify(token, process.env.APP_SECRET)
            return payload
        } catch (error) {
            return false
        }
    }

    decode(token) {
        return jwt.decode(token, process.env.APP_SECRET)
    }
}

module.exports = new TokenService