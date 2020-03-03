const mongoose = require("mongoose");

const Course = mongoose.model("Course", {

    name: {
        type: String,
        required: true,
    },
    holes: {
        type: Number,
        required: true

    }
});



module.exports = Course;
