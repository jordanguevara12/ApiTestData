const jsonServer = require("json-server")
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();

app.use(cors());
server.use(middlewares);
server.use(router);
server.use(middlewares);

server.listen(3000, () => {
    console.log('JSON Server está corriendo en http://localhost:3000');
  });