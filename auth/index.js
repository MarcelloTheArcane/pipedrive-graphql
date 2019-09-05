require('dotenv').config()

const jwt = require('jsonwebtoken')
const AuthenticationError = require('apollo-server').AuthenticationError

module.exports = function (token) {
  if (!token) {
    throw new AuthenticationError('No token found')
  }

  const match = token.match(/^Bearer (.*)$/)

  if (!match && !match[1]) {
    throw new AuthenticationError('Expected Bearer token')
  }

  verifyUser(match[1])
}

function verifyUser (token) {
  try {
    const key = Buffer.from(process.env.JWT_SIGNING_KEY, 'base64').toString()
    const user = jwt.verify(token, key)

    return user['https://hasura.io/jwt/claims']
  } catch (err) {
    console.error(err)
    throw new AuthenticationError('User token is invalid')
  }
}
