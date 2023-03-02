const express = require("express")
const app = express()

app.use(express.json)

app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/public/page/index.html")
})

app.post("/", (req, res) =>
{
    const dateReceived = req.body().date
    const dateToday = new Date()
    const days = Math.ceil((dateToday.getTime() - dateReceived.getTime()) / (1000*3600*24))
    if(days < 0)
    {
        days -= days
        days += " more to go." 
    }
    else
    {
        days = "It's been " + days + "."
    }

    res.send({data:{days: days}})
})

app.listen(8080, (error)=>
    {
        if(error)
        {
            console.log(error);
        }
        console.log("App running");
    })