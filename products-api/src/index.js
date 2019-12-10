import '@babel/polyfill/noConflict';

const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'config/dev.env' });
const server = require('./server');

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  next();
});

server.express.use(async (req, res, next) => {
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
    port: process.env.PORT || 4000,
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
