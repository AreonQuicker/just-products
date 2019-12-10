"use strict";

var _require = require('graphql-yoga'),
    GraphQLServer = _require.GraphQLServer,
    PubSub = _require.PubSub;

var _require2 = require('./generated/prisma-client'),
    prisma = _require2.prisma;

var _require3 = require('./resolvers/index'),
    resolvers = _require3.resolvers,
    fragmentReplacements = _require3.fragmentReplacements; // Create the GraphQL Yoga Server


var pubsub = new PubSub();
var server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
  context: function context(request) {
    return {
      pubsub: pubsub,
      prisma: prisma,
      request: request
    };
  },
  fragmentReplacements: fragmentReplacements
});
module.exports = server;