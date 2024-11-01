const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://abi:1234@abishekdb.cukfz.mongodb.net/");
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
    }
};

connection();
