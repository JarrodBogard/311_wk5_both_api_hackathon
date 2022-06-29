require("dotenv").config()
// console.log(process.env)

const express = require("express")
const app = express()
const connection = require("./Sql/connection")
// console.log(connection)

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/employees", (req, res) => {
    connection.query("SELECT * FROM employees", (err, results) => {
        res.json(results)
    })
})


app.listen(process.env.PORT || 3001)