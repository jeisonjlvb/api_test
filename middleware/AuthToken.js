const jwt = require('jsonwebtoken')
const jwtKey = require('../config/config')

module.exports = function (req, res, next) {
  if (req.headers.token) {
    jwt.verify(req.headers.token, jwtKey.JWT_KEY, function (err, decoded) {
      if (err) {
        res.status(403).send({ message: 'Token invalido' })
      } else {
        next()
      }
    })
  } else {
    res.status(403).send({ message: 'Token invalido' })
  }
}
