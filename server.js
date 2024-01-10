const express = require("express"); // to get the expressjs

const app = express();           // initialise
app.use(express.json());       // Always *use* JSON format, 

const port = 8081;

const toDoList = ["Learn", "apply", "succeed"];
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
});
app.post("/todos", (req, res) => {
    let newToDoItem = req.body.name;          //name =>item-name
    toDoList.push(newToDoItem);
    res.status(201).send({ message: "task added" });
});
app.delete("/todos", (req, res) => {
    const deleteItem = req.body.name;

    for (let i = 0; i < toDoList; i++) {
        if (toDoList[i] === deleteItem) {
            toDoList.splice(i, 1);
            break;
        }
        res.status(202).send({ message: `Deleted Item ${req.body.name}` });
    }
});

app.all("*", (req, res) => {   // for anykind of methods
    res.status(501).send();
});

app.listen(port, () => {
    console.log(`server started Running on Port ${port}`);
});
