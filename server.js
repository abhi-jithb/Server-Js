const http = require("http");
const port = 8081;   // local port numbr


const toDoList = ["learn", "apply", "succeed"];

http
    .createServer((req, res) => {        // call back function
        const { method, url } = req;     // console.log(method, url);

        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(toDoList.toString());
            } else if (method === "POST") {
                let body = "";
                req
                    .on("error", (err) => {
                        console.log(err);
                    })
                    .on("data", (chunk) => {
                        body += chunk;
                        console.log(chunk);
                    })
                    .on("end", () => {                 //call-back function
                        body = JSON.parse(body);

                        let newToDo = toDoList;        //newToDo to implement post method
                        newToDo.push(body.item);
                        newToDo.push(body.date);
                        console.log(newToDo);
                        console.log("data: ", body);
                    });
            } else if (method === "DELETE") {       //DELETE method
                let body = "";
                req
                    .on("error", (err) => {
                        console.error(err);
                    })
                    .on("data", (chunk) => {
                        body += chunk;
                    })
                    .on("end", () => {
                        body = JSON.parse(body);

                        let deleteThisItem = body.item;

                        for (let i = 0; i < toDoList.length; i++) {
                            if (toDoList[i] === deleteThisItem) {
                                toDoList.splice(i, 1);
                                break;
                            } else {
                                console.error("Error: Match Not Found!!");
                                break;
                            }
                        }

                        // METHOD
                        /**   toDoList.find((elem, index) => {
                                                    if (elem === deleteThisItem) {
                                                        toDoList.splice(index, 1);
                                                    } else {
                                                        console.error("Error: Match Not Found!!");
                                                        // console.exit();
                                                    }
                                                }); */
                    });
            } else {
                res.writeHead(501);
            }
        } else {
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {        // call back function

        console.log(`NodeJs Server Started Running on Port: ${port}`);
    });