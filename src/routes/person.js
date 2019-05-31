const express = require("express")
const router = express.Router()

router.get("/person", (req, res) => {
    if(req.query.name){
        res.send(`dapet request dari ${req.params.name}`)
    }else{
        res.send("Request person")
    }     
})

router.get('/person/:name', (req, res) => {
    res.send(`dapet request dari ${req.params.name}`)
})

router.get("/error", (req, res) => {
    throw new Error("Ini error gan")
})

module.exports = router