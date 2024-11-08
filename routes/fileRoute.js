const { uploadeFIle, getFileCount } = require('../controllers/fileController')
const multer = require('multer');
const express = require("express");
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../uploads'));
    },

    filename: function (req, file, callback) {
        let date = Date.now()
        callback(null, date + "_" + file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post("/", upload.array("files", 5), uploadeFIle);
router.get("/", getFileCount)
module.exports = router;

