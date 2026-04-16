const express = require('express');
const router = express.Router()
const products = require('./data')
router.get('/', (req, res) => {res.json(products)})

router.post('/', (req, res) => {const newProduct = req.body;
if (!newProduct.name || isNaN(newProduct.price) || !newProduct.category) {
    res.status(400).json({ message: "Todos los datos son obligatorios" })
}
const productToSave = {id:products.length + 1, ...newProduct}


products.push(productToSave);
res.status(201).json (productToSave)
})

router.put('/:id', (req, res) => {const pid = req.params.id;
    const product = products.find(p => p.id === Number(pid)); 
    if (!product) { 
        return res.status(404).json({ message: "ID de producto no encontrado" });
    }

product.name = req.body.name;
product.price = req.body.price;
product.category = req.body.category;
res.status(200).json(product)

});


router.delete('/:id', (req,res) => {const pid = req.params.id; 
    const index = products.findIndex(p => p.id ===Number(pid));
    if (index === -1){
    return res.status(404).json({"message": "producto no encontrado"});
    }
    products.splice (index, 1)
    res.status(200).json ({"message":"producto eliminado"})
    });
module.exports = router