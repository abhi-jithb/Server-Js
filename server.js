const http = require("http");
const port = 8001;

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>YES!! It is working on the Browser too.. :-) </h2>");
        res.end();
    })
    .listen(port, () => {
        console.log(`Node.JS server is hearing you on Port: ${port}`);
    });


