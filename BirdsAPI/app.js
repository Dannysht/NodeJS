const express = require("express")
const app = express()

app.use(express.json())

const birds = [{id: 1 , name: "parrot"}, {id: 2, name: "eagle"}]
let id = birds[birds.length-1].id + 1

app.get("/birds", (req, res)=>
{
    res.send({message: `The bird is ${req.query.color}`})
})

app.get("/birds", (req, res)=>
{
    res.send({data:birds})
})

app.get("/birds/:id", (req, res) =>
{
    const foundBird = birds.find(bird => bird.id === Number(req.params.id))
    res.send({data : foundBird})
})

app.post("/birds", (req, res) =>
{
    const newBird = 
    {
        id: id,
        ...req.body
    }
    birds.push(newBird)
    res.send({data:birds})
})

app.put("/birds/:id", (req, res) =>
{
    let birdToChange = birds.find(bird => bird.id === Number(req.params.id))
    const indexOfBird = birds.indexOf(birdToChange)
    if(indexOfBird !== -1)
    {
        birdToChange =
        {
            ...birdToChange,
            ...req.body
        }
        birds[indexOfBird] = birdToChange
        res.send({data:birdToChange})
    }
    else
    {
        res.send({message: `No bird with id ${req.params.id}`})
    }
})

app.delete("/birds/:id", (req, res) =>
{
    
    const birdToDelete = birds.find(bird => bird.id === Number(req.params.id))
    const indexOfBird = birds.indexOf(birdToDelete)
    if(indexOfBird !== -1)
    {
        birds.splice(indexOfBird, 1)
        res.send({message: `Deleted bird with id ${req.params.id}`})
    }
    else
    {
        console.log(birds);
        res.send({message: `No bird with id ${req.params.id}`})
    }
    
})

app.listen(8080), () =>
{
    console.log("App is running on port", 8080);
}