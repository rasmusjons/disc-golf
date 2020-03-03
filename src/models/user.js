const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    // profilePicture: {
    //     type: String,
    //     default: "src"

    // }

});



module.exports = User;
