import dotenv from "dotenv"
dotenv.config()

import express from "express"
import nodemailer from "nodemailer";
import db from "./databases/connection.js"
import { decrypt } from "./routers/authenticationRouters.js";
import helmet from "helmet"
const PORT = 8080
const app = express()
import cors from "cors"
app.use(cors({
    credentials:true,
    origin: true
}))

db.exec(
    `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(32) NOT NULL,
        password TEXT NOT NULL,
        email VARCHAR(64) NOT NULL
        );`   
    )

app.use(helmet())
app.use(express.json())

import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

import { rateLimit } from "express-rate-limit"
app.use("/auth", rateLimit({
    windowsMS: 60 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
}))

import router from "./routers/authenticationRouters.js"
app.use(router)


app.post('/forgotPass', async (req, res) => {
    try {
      //let testAccount = await nodemailer.createTestAccount();
  
      let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
          user: "dannymandatorytwo@outlook.com",
          pass: "PasswordForMandatory",
        },
      });

      const userFound = await db.get("SELECT * FROM users WHERE email = ?", [req.body.email])

      let info = await transporter.sendMail({
        from: "Mandatory2 Support <dannymandatorytwo@outlook.com>",
        to: `<${req.body.email}>`,
        subject: "Forgotten password",
        text: `Your forgotten password is: ${decrypt(userFound.password)}`,
      });
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.status(200).send();
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  });


app.listen(PORT, (err) =>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server running on port: ", PORT)
    }
})