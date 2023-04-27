import db from "./connection.js"

db.exec(
    `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(32) NOT NULL,
        password TEXT NOT NULL,
        email VARCHAR(64) NOT NULL
        );`   
    )