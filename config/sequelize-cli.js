const { database, databaseHost } = require('./env');

// sequelize-cli database connection configuration
const connection = {
  ...database,
  dialect: 'postgres',
  host: databaseHost,
  protocol: 'postgres',
  dialectOptions: {
    rejectUnauthorized: false
  }
};

module.exports = {
  development: connection,
  test: connection,
  production: connection
};
