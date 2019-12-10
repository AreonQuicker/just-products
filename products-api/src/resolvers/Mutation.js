const Mutations = {
  async testMutation(parent, args, ctx, info) {
    return ctx.prisma.createUser(
      { name: 'TestName', surname: 'TestSurname' },
      info
    );
  },
};

module.exports = Mutations;
