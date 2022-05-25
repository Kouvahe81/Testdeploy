const express = require('express')
const mongoose = require('mongoose')
const {request, response} = require("express");
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get("/", (request, response)=>{
    return response.send("Hello world")
})


app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
})