const mongoose = require("mongoose")

const userModelSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String,
    }
})


const userModel = mongoose.model("user", userModelSchema);
module.exports = userModel