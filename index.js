const express = require("express")
const app = express()
const employeesRouter = require('./routes/employees')
const contactRouter = require('./routes/contact')

app.use(express.json())

app.use('/employees', employeesRouter)
app.use('/contact', contactRouter)

app.get("/", (req, res) => {
    res.send("welcome to our page")
})

app.listen(process.env.PORT || 3001)