const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname,"../../notes.db");

const db = new sqlite3.Database(dbPath,(err) =>{
    if(err){
        console.log("DB connection error:",err);
    }else{
        console.log("Connected to sqlite database");
    }
});

//Create table if not exist

db.run(`CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    user_id INTEGER)`);

db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT)`);

module.exports = db;