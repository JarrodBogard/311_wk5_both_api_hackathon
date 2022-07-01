const express = require("express")
const app = express()
const employeesRouter = require('./Routes/employees')
const connection = require("./Sql/connection")


app.use(express.json())

app.use('/employees', employeesRouter)


app.get("/", (req, res) => {
    res.send("welcome to our page")
})

app.listen(process.env.PORT || 3001)