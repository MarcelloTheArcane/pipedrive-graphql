const GraphQLSchema = require('graphql').GraphQLSchema
const GraphQLObjectType = require('graphql').GraphQLObjectType
const GraphQLString = require('graphql').GraphQLString

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve () {
          return 'world'
        },
      },
    },
  }),
})
