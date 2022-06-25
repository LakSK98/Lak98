const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    shape:{type:String,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true},
    weight:{type:String,required:true},
    deliveryCharge:{type:String,required:true},
    deliveryMethod:{type:String,required:true},
    handlingTime:{type:String,required:true},
    location:{type:String,required:true},
    image:{type:String,required:true},
    length:{type:String,required:true},
    description:{type:String,required:true},
    startingPrice:{type:String,required:true},
    duration:{type:String,required:true},
    paymentMethod:{type:String,required:true}
});

module.exports = mongoose.model('Listing',ListingSchema);