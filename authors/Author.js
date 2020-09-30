const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Author = connection.define('authors', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Author.sync({ force: false });

module.exports = Author;