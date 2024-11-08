const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const fileRute = require('./routes/fileRoute');



const app = express()



app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sagar:TnBbP2c5UHJzY.7@file-upload.zuogt.mongodb.net/files?retryWrites=true&w=majority&appName=file-upload")
    .then(() =>
        app.listen(4000, () =>
            console.log(`APP listening at 4000`)
        )
    )
    .catch((error) => console.log(error));



app.get('/', (req, res) => {
    res.send('Hello from Sagar.')
})

app.use("/api/upload", fileRute)
app.use("/api/files/count", fileRute)




//handling route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route is not found !"
    })
})

//handling server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.toString()
    })
})