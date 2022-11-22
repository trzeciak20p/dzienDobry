console.log("server runs")

const express = require("express")
const mysql = require('mysql2')

//basic express stuff
const app = express();
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening at port ${port}`))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//database pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dziendobry',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


//test query
pool.query(
    'SELECT * FROM uzytkownicy',
    (err, res) =>{
        console.log(res)
    }
)


app.post("/api/login", (req, res) => {
    //to jest to co dosta jesz od użytkownika
    console.log(req.body)
    pool.query(
    'SELECT * FROM uzytkownicy',
    (err, result) =>{
        console.log(res)
        //tym syfem wysyłasz odpowiedź do użytkownika
        return res.json({
                message : "Logowanie udane czy coś"
               })
    }
)
})
