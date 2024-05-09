const mongoose = require('mongoose');

// The line below should be omitted from version control
// because it contains sensitive information
// mongodb+srv://sarahsheng08:<password>@sheng0.egv5ucy.mongodb.net/
mongoose.connect('mongodb+srv://sarahsheng08:finalproject08@sheng0.egv5ucy.mongodb.net/', {
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

// app.post("/register", async (req, resp) => {
//     try {
//         const user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         if (result) {
//             delete result.password;
//             resp.send(req.body);
//             console.log(result);
//         } else {
//             console.log("User already register");
//         }
 
//     } catch (e) {
//         resp.send("Something Went Wrong");
//     }
// });
