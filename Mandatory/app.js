import express from "express"
const app = express()
import path from "path"

import fs from "fs"
import renderPage from "./util/temlpateEngine.js"

app.use(express.static("public"))

//Pages

const loginPage = fs.readFileSync("./public/pages/login/login.html").toString()
const registerPage = fs.readFileSync("./public/pages/register/register.html").toString()

const notesPagePath = "./public/pages/notes/notes.html"
const notesPage = renderPage(notesPagePath)

const adminPagePath = "./public/pages/adminPage/adminPage.html"
const adminPage = renderPage(adminPagePath, {tabTitle: "Admin Panel"})

app.get("/", (req,res) =>
{
    res.send(loginPage)
})

app.get("/register", (req, res) =>
{
    res.send(registerPage)
})

app.get("/notes", (req,res) =>
{
    res.send(notesPage)
})

app.get("/adminPanel", (req, res) =>
{
    res.send(adminPage)
})

const PORT = 8080
app.listen(PORT, (error)=>
{
    if(error)
    {
        console.log(error);
    }
    console.log("Server running on", PORT);
})