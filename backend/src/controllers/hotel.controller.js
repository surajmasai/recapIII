const express = require('express');

const Resturant = require("../models/hotel.model");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const hotel = await Resturant.find().lean().exec();

        return res.status(201).send(hotel)
    } catch (err) {
        return res.status(500).json({ message: err.message, status: "failed" })
    }
})

module.exports = router;