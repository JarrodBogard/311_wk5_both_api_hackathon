const express = require("express")
const employeesRouter = require('./Routes/employees')
const app = express()

app.use(express.json())

app.use('/employees', employeesRouter)

app.get("/", (req, res) => {
    console.log("working")
    res.send("hello")
})

app.listen(process.env.PORT || 3001)