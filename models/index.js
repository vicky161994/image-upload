const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        imageName: {
            type: String,
            required: true,
        },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("Image", schema);