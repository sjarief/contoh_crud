const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const personRoute = require("./routes/person")
const KonsumenRouter = require("./routes/customer")

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body )
    next()
})

app.use(personRoute)
app.use(KonsumenRouter)
app.use(express.static('public'))

//midleware
app.use((req, res, next) => {
    res.status(404).send("sayangnya tidak bisa diakses")
})

//handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`jalan pada port ${PORT}`)
})