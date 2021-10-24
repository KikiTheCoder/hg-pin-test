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
    event: req_num,
    program: req_num,
    dev: req_bool
})

module.exports = mongoose.model("Activation", Activation)
