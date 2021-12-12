require ('dotenv').config()
const PORT = process.env.PORT || 8080
const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")


const app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require("./rotas/rotas.js")(app)


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
app.use(express.static("public"))