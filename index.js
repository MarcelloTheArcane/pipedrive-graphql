const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const ActivitiesAPI = require('./sources/ActivitiesAPI')

const getUser = require('./auth')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      ActivitiesAPI: new ActivitiesAPI(),
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

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
