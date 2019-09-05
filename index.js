const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const DataSource = require('./sources/index')

const getUser = require('./auth')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      DataSource: new DataSource(),
    }
  },
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = getUser(token)
    return { user }
  },
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
