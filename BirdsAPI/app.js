const express = require("express")
const app = express()

app.get("/birds", (req, res)=>
{
    res.send({message: `The bird is ${req.query.color}`})
})

app.get("/birds", (req, res)=>
{
    res.send({birds:["parrot", "eagle"]})
})

app.get("/birds/:birdSize", (req, res) =>
{
    res.send({birdsSize : req.params.birdSize})
})


app.listen(8080)