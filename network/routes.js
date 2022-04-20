const mail = require('../components/mail/network-mail');
const login = require('../components/login/network-login');

const routes = (server) => {
  server.use('/mail', mail);
  server.use('/login', login);
}

module.exports = routes;
