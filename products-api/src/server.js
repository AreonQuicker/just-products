import prisma from './prisma';

const { GraphQLServer, PubSub } = require('graphql-yoga');
// const { prisma } = require('./generated/prisma-client');
const { resolvers, fragmentReplacements } = require('./resolvers/index');

// Create the GraphQL Yoga Server

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context(request) {
    return {
      pubsub,
      prisma,
      request,
    };
  },
  fragmentReplacements,
});

module.exports = server;
