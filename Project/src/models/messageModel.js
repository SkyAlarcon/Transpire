const mongoose = require("mongoose")

const MsgSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        athleteIDs: {
            type: [mongoose.Schema.Types.ObjectId],
            maxLength: 2,
            required: true
        },
        messages: {
            type: [String],
            required: true
        }
    }
);

const Model = mongoose.model("message", MsgSchema);

module.exports = Model;