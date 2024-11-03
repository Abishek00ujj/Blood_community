const mongoose = require("mongoose");

const userdataSchema = new mongoose.Schema({
    _userid: {
        type: String,
        required:true,
    },
    name: {
        type: String,
        required: true,
    },
    blood: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    img: {
        type: String,

    }
});

module.exports = mongoose.model("UserData", userdataSchema);
