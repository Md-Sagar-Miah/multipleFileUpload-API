const fileModel = require("../models/fileModel");


//upload files
const uploadeFIle = async (req, res) => {
    try {

        const data = req.files.map((file) => {
            return {
                filepath: file.path
            }
        })

        const response = await fileModel.insertMany(data);

        res.status(201).json({
            status: "Success",
            message: 'Files upload is done.',
            response
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            error: error.toString()
        })
    }
}

//get file count
const getFileCount = async (req, res) => {
    try {
        const data = await fileModel.find()
        res.status(200).json({
            status: "Success",
            count: data.length
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            error: error.toString()
        })
    }
}

module.exports = { uploadeFIle, getFileCount }

