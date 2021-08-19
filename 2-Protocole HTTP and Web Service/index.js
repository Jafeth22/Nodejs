const http = require('http');

/**
 * request = From client to server
 * response = From server to client
 */
http
    .createServer((request, response) => {
        response.write("Hello world");
        response.end(); //The task has been completed
    })
    .listen(8080); //The servers should send the responder through some port, so, here we define it
