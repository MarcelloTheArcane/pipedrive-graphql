const express = require('express')
const graphqlHttp = require('express-graphql')

const schema = require('./schema')

const app = express()

app.use(
  '/graphql',
  graphqlHttp({
    schema: schema,
    graphiql: true,
  }),
)

app.listen(4000, () => console.log('Listening on http://localhost:4000/graphql'))
