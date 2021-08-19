const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')

/**
 * request = From client to server
 * response = From server to client
 */
http
    .createServer((request, response) => {
        const {url} = request
        response.writeHead(200, {"Content-Type": "text/html"})
        if (url === '/') {
            response.write(html);
        }else if(url === '/about') {
            response.write(about);
        }else{
            response.writeHead(404, {"Content-Type": "text/html"})
            response.write("Page not found");
        }
        response.end(); //The task has been completed
    })
    .listen(8080); //The servers should send the responder through some port, so, here we define it
