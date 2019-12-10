"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mutations = {
  testMutation: function () {
    var _testMutation = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx, info) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", ctx.prisma.createUser({
                name: 'TestName',
                surname: 'TestSurname'
              }, info));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function testMutation(_x, _x2, _x3, _x4) {
      return _testMutation.apply(this, arguments);
    }

    return testMutation;
  }()
};
module.exports = Mutations;