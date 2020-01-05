import productsController from '../controller/productsController';

import express from 'express';
var router = express.Router();

router.get('/', function(request, response, next) {
    const date = new Date();
    response.json({
        'message': 'This is root', 
        'serverDate': date.toDateString(),
        'serverTime': date.toTimeString()
    });
});

router.get("/api/v1/products", productsController.findProducts);
router.post("/api/v1/products", productsController.createProduct);
router.get("/api/v1/products/:id", productsController.findProductById);
router.put("/api/v1/products/:id", productsController.updateProduct);
router.delete("/api/v1/products/:id", productsController.deleteProductById);

router.get('/hatz', function(request, response, next) {
    const jsonArray = [];
    for (let i = 0; i < 100; i++) {
        const message = `hatz #${i}`;
        jsonArray.push({message: message});
    }
    response.json(jsonArray);
  });

export default router;