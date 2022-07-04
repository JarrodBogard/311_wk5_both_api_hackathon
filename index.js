const express = require("express")
const app = express()
const employeesRouter = require('./Routes/employees')

app.use(express.json())

app.use('/employees', employeesRouter)

app.get("/", (req, res) => {
    res.send("welcome to our page")
})

app.listen(process.env.PORT || 3001)