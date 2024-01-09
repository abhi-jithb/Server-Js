const http = require("http");
const port = 8680;

const toDoList = ["Learn", "apply", "succeed", "ok", "hello"];
http

    .createServer((req, res) => {
        // res.writeHead(200, {
        // "Content-Type": "text/html"
        // });
        // res.write("<h2>OPened server in Browser");
        const { method, url } = req;
        if (url === "/todos") {
            if (method === "GET", { "Content-Type": "text/html" }) {
                res.writeHead(200);
                res.write(toDoList.toString());
            } else {
                res.writeHead(501);
            }
        }

        res.end();
    })
    .listen(port, () => {
        console.log(`toDoList is active in Port: ${port}`);
    });

