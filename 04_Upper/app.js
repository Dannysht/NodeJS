import express from "express"
const app = express()
import path from "path"

//import "./util/jokes.js"

app.use(express.static("public"))

app.get("/", (req, res) =>
{
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
})

app.get("/", (req, res) =>
{
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
})

const PORT = 8080
app.listen(PORT, (error) =>
{
    if(error)
    {
        console.log(error);
    }
    console.log("Server running on ", PORT);
})