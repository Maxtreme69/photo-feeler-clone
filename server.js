import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import User from "./models/User.js";

const app = express();
 
dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Database");
    } catch(error) {
        console.log(error);
    }
}

app.use(express.json());

app.get('/abc', (req, res) => {
    res.send('test');
})

app.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(404).send("user already exists")
        } 
        res.status(500);
        res.send('an error occured');
    }
})

app.listen(4000, () => {
    console.log('test');
    console.log('now listening on port 4000');
    connect();
});