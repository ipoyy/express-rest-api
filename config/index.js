const userRoutes = require('./routes/userRoutes');

const config = {
  migrate: true,
  userRoutes,
  port: process.env.PORT || '2017',
};

module.exports = config;
