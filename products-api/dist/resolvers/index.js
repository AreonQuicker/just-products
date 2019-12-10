"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragmentReplacements = exports.resolvers = void 0;

var _require = require('prisma-binding'),
    extractFragmentReplacements = _require.extractFragmentReplacements;

var Query = require('./Query');

var Mutation = require('./Mutation');

var resolvers = {
  Query: Query,
  Mutation: Mutation
};
exports.resolvers = resolvers;
var fragmentReplacements = extractFragmentReplacements(resolvers);
exports.fragmentReplacements = fragmentReplacements;