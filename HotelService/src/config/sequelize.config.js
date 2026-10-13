require('ts-node/register');   //this will ensure when typescript file is loaded it will convert it to javascript for sequelize for migration
const config  = require('./db.config');
module.exports = config;