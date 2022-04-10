const { verify } = require('../services/TokenService')

module.exports = async(req, res, next) => {
    if (!('authorization' in req.headers)) {
        return res.status(401).send({
          status: 'error',
          code: 401,
          msg: 'you are not autherized!'
        })
      }
      const token = verify(req.headers.authorization)
      if (!token) {
        return res.status(401).send({
          status: 'error',
          code: 401,
          msg: 'your token is not valid!'
        })
      }
      next()
}
