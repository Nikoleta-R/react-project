const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

let Product = new Scheme({
    name: String,
    price: Number,
    imageUrl: String,
});
module.exports = mongoose.model("Product", Product);