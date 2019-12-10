const { forwardTo } = require('prisma-binding');

const Query = {
  products: forwardTo('prisma'),
};

module.exports = Query;
