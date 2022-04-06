const mail = require('../components/mail/network-mail');

const routes = (server) => {
  server.use('/mail', mail);
}

module.exports = routes;