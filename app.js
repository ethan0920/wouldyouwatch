const apiServer = require('./apiHandler');
const routes = require('./routes');
const server = apiServer(routes);

server.start(process.env.PORT || 3000);
