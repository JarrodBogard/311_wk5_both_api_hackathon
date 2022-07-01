const express = require("express")
const app = express()
const employeesRouter = require('./Routes/employees')
const connection = require("./Sql/connection")


app.use(express.json())

app.use('/routers', employeesRouter)

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/employees", (req, res) => {
    connection.query("SELECT * FROM employees", (err, results) => {
        res.json(results)
    })
})


app.listen(process.env.PORT || 3001)