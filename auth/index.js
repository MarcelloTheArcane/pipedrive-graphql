require('dotenv').config()

const AuthenticationError = require('apollo-server').AuthenticationError

module.exports = function (token) {
  if (!token) {
    throw new AuthenticationError('No token found')
  }

  const match = token.match(/^Basic (.*)$/)

  if (!match && !match[1]) {
    throw new AuthenticationError('Expected Basic token')
  }

  if (match[1] !== process.env.BASIC_AUTH_KEY) {
    throw new AuthenticationError('Incorrect Authorization')
  }

  return {
    username: Buffer.from(match[1], 'base64').toString().split(':')[0]
  }
}
