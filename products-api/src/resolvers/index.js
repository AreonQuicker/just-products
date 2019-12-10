const { extractFragmentReplacements } = require('prisma-binding');
const Query = require('./Query');
const Mutation = require('./Mutation');

const resolvers = {
  Query,
  Mutation,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
