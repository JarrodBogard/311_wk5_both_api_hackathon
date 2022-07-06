const express = require("express")
const app = express()
const employeesRouter = require('./routes/employees')
const contactRouter = require('./routes/contacts')
const addressRouter = require('./routes/address')

app.use(express.json())

app.use('/employees', employeesRouter)
app.use('/contacts', contactRouter)
app.use('/address', addressRouter)

app.get("/", (req, res) => {
    res.send("welcome to our page")
})

app.listen(process.env.PORT || 3001)