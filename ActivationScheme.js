const mongoose = require("mongoose")
const Schema = require("mongoose").Schema

const req_bool = {
    type: Boolean,
    required: true
}

const req_num = {
    type: Number,
    required: true
}

const Activation = new Schema ({
    id: {
        type: Number,
        unique: true,
        index: true,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    event: {
        type: Number,
        required: false
    },
    program: {
        type: Number,
        required: false
    },
    dev: req_bool,
    calendar_week: req_num,
    Counter: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Activation", Activation)
