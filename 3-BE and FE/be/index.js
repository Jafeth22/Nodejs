const server = require('./server');
const { PORT } = require('./config');

server.listen(PORT, () => {
    console.log("CondingApp backend running on port " + PORT);
});