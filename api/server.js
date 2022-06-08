const express = require("express");
const cors = require('cors');
const mysql = require('mysql2');


const app = express();
app.use(express.json());
app.use(cors());


app.listen(8080,() =>{
    console.log("Server is runnig...");
});


const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"trooexam",
    port:3306
});



db.connect((error)=>{
    if (error) {
        console.log("connection error....");
    } else {
        console.log("connected....");
    }
});


require("./profile")(app,db);


