const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Round = require("./models/round");
const Course = require("./models/course");

const app = express();
const port = process.env.PORT || 3000;




app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});


//USER - API
app.post("/users", async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save()
        res.status(201).send(user);

    } catch (e) {
        res.status(400).send(e);

    }
});

app.get("/users", async (req, res) => {

    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send()
    }
});

app.get("/users/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);

    } catch {
        res.status(500).send();
    }
});


app.patch("/users/:id", async (req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'rounds']
    const isValidoperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidoperation) {
        return res.status(400).send({ error: "invalid updates" })
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send();
        }
        res.send(user)
    } catch (e) {

        res.status(400).send(e);
    }

});


//COURSE

app.post("/courses", async (req, res) => {
    const course = new Course(req.body);

    try {
        await course.save()
        res.status(201).send(course);

    } catch (e) {
        res.status(400).send(e);

    }
});



//ROUNDS

app.post("/rounds", async (req, res) => {
    const round = new Round(req.body);

    try {
        await round.save()
        res.status(201).send(round);

    } catch (e) {
        res.status(400).send(e);
    }
});


app.get("/rounds", async (req, res) => {

    try {
        const rounds = await Round.find({})
        res.status(200).send(rounds)
    } catch (e) {
        res.status(500).send()
    }
});




app.get("/rounds/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const round = await Round.findById(_id)
        if (!round) {
            return res.status(404).send();
        }
        res.status(200).send(user);

    } catch {
        res.status(500).send();
    }
});








app.listen(port, () => {
    console.log("Server is up on port " + port);
});
