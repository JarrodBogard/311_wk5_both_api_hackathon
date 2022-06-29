const express = require("express")
const employeesRouter = require('./routers/employees')
const app = express()

app.use(express.json())

app.use('/routers', employeesRouter)

app.get("/", (req, res) => {
    console.log("working")
    res.send("hello")
})

app.listen(process.env.PORT || 3001)