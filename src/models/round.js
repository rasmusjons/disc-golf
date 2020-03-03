const mongoose = require("mongoose");
const validator = require("validator");

const Round = mongoose.model("Round", {

    course: {
        type: String,
        required: true,
    },
    scores: {
        type: Array,
        default: [
            { hole: 1, score: 0 },
            { hole: 2, score: 0 },
            { hole: 3, score: 0 },
            { hole: 4, score: 0 },
            { hole: 5, score: 0 },
            { hole: 6, score: 0 },
            { hole: 7, score: 0 },
            { hole: 8, score: 0 },
            { hole: 9, score: 0 },
        ]
    }
});



module.exports = Round;
