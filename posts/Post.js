const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Post = connection.define('posts', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  datetime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Post.sync({ force: false });

module.exports = Post;