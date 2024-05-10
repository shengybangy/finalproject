
require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect(process.env.SECRET_KEY, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// Database Schema - Structure to Hold Each New Item That We Create
const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
    category: String
});

const Item = mongoose.model('items', ItemSchema);
Item.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
require('mongodb');
console.log("App listen at port 5001");
app.use(express.json());
app.use(cors());


// Should return all Items in the database
app.get("/items", (_req, resp) => {
    Item.find().then(result => {
        resp.send(result);
    });
});

// Should return all Items in the database
app.post("/items", (req, resp) => {
    
    // Create a new item object from the request body
    const item = new Item(req.body);

    item.save().then(result => {
        resp.send(result);
    });
});

app.delete("/items/:id", (req, resp) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id).then(result => {
        resp.send(result);
    });
});

app.listen(5001);

