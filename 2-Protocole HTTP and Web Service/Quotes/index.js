const express = require('express');
const server = express();
const { PORT } = require('./config/index');
const { HomeRoutes, QuotesRoutes } = require('./routes');
const { NotFountMiddleware } = require('./middlewares')

//This let me use CSS and JS folder
server.use(express.static('./public'))
server.use(express.json())

server.use('/', HomeRoutes)
server.use('/', QuotesRoutes)

server.use(NotFountMiddleware); //This will be executed in case the select some page doesn't exist

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});