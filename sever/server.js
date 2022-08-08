const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { success, error } = require("consola");
const router = require("./route/route")

require("dotenv").config();


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://0.0.0.0:27017/vinnyDB", { useNewUrlParser: true })
mongoose.connect(process.env.KEY_MONGO, (err, data) => {
    if (err) {
        error({
            message: err,
        })
    } else {
        success({
            message: "db successfully",
            badge: true
        })
    }
})
app.use(router)

app.listen(process.env.PORT || 2050, (err, data) => {
    if (err) throw err;
    console.log('server is up');
})

