const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const ActivitiesAPI = require('./sources/ActivitiesAPI')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      ActivitiesAPI: new ActivitiesAPI(),
    }
  },
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
