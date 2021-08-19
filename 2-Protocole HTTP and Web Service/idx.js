const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html')

/**
 * request = From client to server
 * response = From server to client
 */
http
    .createServer((request, response) => {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write(html);
        response.end(); //The task has been completed
    })
    .listen(8080); //The servers should send the responder through some port, so, here we define it
