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
const adminPage = renderPage(adminPagePath, {tabTitle: "Admin Panel", cssLink: '<link rel="stylesheet" href="/pages/adminPage/adminPage.css">'})

const week1PagePath = "./public/pages/notes/week1/week1.html"
const week1Page = renderPage(week1PagePath, {tabTitle: "Week 1"})

const week2PagePath = "./public/pages/notes/week2/week2.html"
const week2Page = renderPage(week2PagePath, {tabTitle: "Week 2"})
const week3PagePath = "./public/pages/notes/week3/week3.html"
const week3Page = renderPage(week3PagePath, {tabTitle: "Week 3"})
const week4PagePath = "./public/pages/notes/week4/week4.html"
const week4Page = renderPage(week4PagePath, {tabTitle: "Week 4"})
const week5PagePath = "./public/pages/notes/week5/week5.html"
const week5Page = renderPage(week5PagePath, {tabTitle: "Week 5"})
const week6PagePath = "./public/pages/notes/week6/week6.html"
const week6Page = renderPage(week6PagePath, {tabTitle: "Week 6"})
const week7PagePath = "./public/pages/notes/week7/week7.html"
const week7Page = renderPage(week7PagePath, {tabTitle: "Week 7"})


app.get("/", (req,res) =>
{
    res.send(loginPage)
})

app.post("/", (req, res)=>
{
    res.send({mesage: "Successfully logged in"})
})

app.get("/register", (req, res) =>
{
    res.send(registerPage)
})

app.post("/register", (req, res)=>
{
    res.send({message: "Successfully registered"})
})

app.get("/notes", (req,res) =>
{
    res.send(notesPage)
})

app.get("/adminPanel", (req, res) =>
{
    res.send(adminPage)
})

app.get("/week1", (req,res) =>
{
    res.send(week1Page)
})

app.get("/week2", (req,res) =>
{
    res.send(week2Page)
})
app.get("/week3", (req,res) =>
{
    res.send(week3Page)
})
app.get("/week4", (req,res) =>
{
    res.send(week4Page)
})
app.get("/week5", (req,res) =>
{
    res.send(week5Page)
})

app.get("/week6", (req,res) =>
{
    res.send(week6Page)
})

app.get("/week7", (req,res) =>
{
    res.send(week7Page)
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