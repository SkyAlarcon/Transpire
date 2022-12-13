const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        sports: {
            type: [String],
            maxLength: 5,
            required: true
        },
        friendlyOrExclusive: {
            type: String,
            required: true,
            validate: {
                validator: function(str){
                     if (str.toLowerCase() == "friendly" || str.toLowerCase() == "exclusive") return true;
                     return false;
                }
            }
        },
        description: {
            type: String
        },
        adm: {
            type: [mongoose.Schema.Types.ObjectId],
            required: true
        },
        socials: {
            type: [String]
        },
        athletes: {
            type: [mongoose.Schema.Types.ObjectId],
            required: true
        },
        posts: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "post"
        }
    },
    { timestamp: true }
);

const Model = mongoose.model("team", TeamSchema);

module.exports = Model;