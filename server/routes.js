const express = require("express");
const routes = express.Router();
const Product = require('./models/Product');
routes.get('/', async (req, res)=>{
    const products = await Product.find();
    res.send(products);
});
routes.get('/add',  (req, res)=>{
   
    res.render('createProducts', {title: 'Create', })
})
routes.post('/add', async (req, res)=>{
    const product = new Product ({

        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price

    })
    console.log(product)
    await product.save()
    res.send(product)
})

module.exports = routes;