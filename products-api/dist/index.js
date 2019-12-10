"use strict";

require("@babel/polyfill/noConflict");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cookieParser = require('cookie-parser');

require('dotenv').config({
  path: 'config/dev.env'
});

var server = require('./server');

server.express.use(cookieParser());
server.express.use(function (req, res, next) {
  next();
});
server.express.use(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  port: process.env.PORT || 4000
}, function (deets) {
  console.log("Server is now running on port http://localhost:".concat(deets.port));
});