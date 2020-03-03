const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017";

mongoose.connect(connectionURL + "/Discgolf", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
