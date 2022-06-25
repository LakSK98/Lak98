const Listing = require('../models/Listing');
const router = require('express').Router();

router.route('/add').post(async (req, res) => {
    const { title,
        type,
        shape,
        size,
        color,
        weight,
        deliveryCharge,
        deliveryMethod,
        handlingTime,
        location,
        image,
        length,
        description,
        startingPrice,
        duration,
        paymentMethod } = req.body;

    var newListing = new Listing({
        title,
        type,
        shape,
        size,
        color,
        weight,
        deliveryCharge,
        deliveryMethod,
        handlingTime,
        location,
        image,
        length,
        description,
        startingPrice,
        duration,
        paymentMethod
    });

    newListing.save().then((listing) => {
        res.json("Listing success.").status(200);
    }).catch((err) => {
        console.log(err)
        res.json("Listing failed! Please Try again later.").status(400);
    });
});

router.route('/').get((req, res) => {
    Listing.find().then((listing) => {
        res.json(listing).status(200);
    }).catch((err) => {
        res.send(err).status(400);
    });
});

module.exports = router;
