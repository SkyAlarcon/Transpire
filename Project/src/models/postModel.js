const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        athleteOpID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        teamID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }
);

const Model = mongoose.model("post", PostSchema);

module.exports = Model;