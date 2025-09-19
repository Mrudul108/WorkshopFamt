// const express = require("express")
import express from "express"
const app = express()

app.get("/", (req,res) => {
    const n = req.query.name || "Guest"
    console.log(req.query.name);
    res.send(`<h1>Welcome ${n}</h1>`)
})

app.listen(8080, () => {
    console.log('Server started, running on 8080')
})