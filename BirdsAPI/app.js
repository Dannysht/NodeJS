const express = require("express")
const app = express()

const birds = [{name: "parrot"}, {name: "eagle"}]

app.get("/birds", (req, res)=>
{
    res.send({message: `The bird is ${req.query.color}`})
})

app.get("/birds", (req, res)=>
{
    res.send(birds)
})

app.get("/birds/:id", (req, res) =>
{
    res.send({id : req.params.id})
})


app.listen(8080)