//just for vercel deployemnet

const app = require('../server/index');
module.exports = app;
module.exports.handler = app.handler;