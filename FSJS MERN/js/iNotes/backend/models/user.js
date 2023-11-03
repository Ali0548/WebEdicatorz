const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Name is required"]
    },
    password: {
        type: String,
        required: [true, "Name is required"]
    },
}, {
    timeStamp: true
});
module.exports = mongoose.model('user', user);