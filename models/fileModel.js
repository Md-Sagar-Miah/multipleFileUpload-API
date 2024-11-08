const { mongoose } = require("mongoose");

const fileSchema = mongoose.Schema({
    filepath: {
        type: String,
        require
    }
})

const fileModel = mongoose.model('files', fileSchema);
module.exports = fileModel