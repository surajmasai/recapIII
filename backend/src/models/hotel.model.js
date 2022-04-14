const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    menu: { type: String, required: true },
    costform: { type: Number, required: true },
    totalvotes: { type: Number, required: true },
    reviews: { type: Number, required: true },
    rating: { type: String, required: true },
    payment_method: { type: Boolean, required: false },
    imageUrl: { type: String, required: true }

}, {
    versionKey: false,
    timestamps: true,
})
module.exports = mongoose.model("resturant", hotelSchema)