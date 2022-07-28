const express = require('express')
const app = express()
const port = 9000
const content = require("./resources/jokeContent")


app.get("/",(req,res) => {
    res.status(200).json(content)
})

app.listen(port,() => {
    console.log(`Config done on port ${port}`)
})