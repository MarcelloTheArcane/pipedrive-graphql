const { ApolloServer, gql } = require("apollo-server");

const ActivitiesAPI = require("./sources/ActivitiesAPI");

const typeDefs = gql`
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

  type Query {
    posts: [Post]!
    post(id: Int!): Post
  }
`;

const resolvers = {
  Query: {
    posts: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPosts();
    },
    post: async (_source, { id }, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPost(id);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      ActivitiesAPI: new ActivitiesAPI()
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
