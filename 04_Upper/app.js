import express from "express"
const app = express()
import path from "path"

import fs from "fs"

import jokes from "./util/jokes.js"

import renderPage from "./util/templateEngine.js"

app.use(express.static("public"))
//app.use(express.static("components"))

//Pages
const frontpagePath = "./public/pages/frontpage/frontpage.html"
const frontpage = renderPage(frontpagePath, {tabTitle: "Upper | Welcome"})

const IRLQuestsPath = "./public/pages/IRLQuests/IRLQuests.html"
const IRLQuestsPage = renderPage(IRLQuestsPath, {tabTitle: "Upper | Quests"})

const contactPage = "./public/pages/contact/contact.html"

const jokesPath  =  "./public/pages/jokes/jokes.html"
const jokesPage = renderPage(jokesPath, {tabTitle: "Upper | Jokes ", cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`})

app.get("/", (req, res) =>
{
    res.sendFile(frontpagePage)
})

app.get("/jokes", (req, res) =>
{
    res.sendFile(path.resolve("public/pages/jokes/jokes.html"))
})

app.get("/quests", (req, res) =>
{
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
})

app.get("/contact", (req, res) =>
{
    res.send(contactPage)
})

const PORT = Number(process.env.PORT) || 8080

if(process.env.ENV === "DEV")
{
    //setup dev
}

app.listen(PORT, (error) =>
{
    if(error)
    {
        console.log(error);
    }
    console.log("Server running on ", PORT);
})