import productsService from '../service/productsService';
import Product from '../model/product';

class ProductsController {

    findProducts(request, response) {
        return response.json(productsService.findAll());
    }

    deleteProductById(request, response) {
        const params = request.params;
        return response.json(productsService.delete(params.id));
    }

    findProductById(request, response) {
        const params = request.params;
        return response.json(productsService.findById(params.id));
    }

    createProduct(request, response) {
        const json = request.body;
        return response.json(productsService.create(new Product(json.id, json.name, json.description)));
    }

    updateProduct(request, response) {
        const json = request.body;
        const params = request.params;
        const result = productsService.update(params.id, new Product(json.id, json.name, json.description));
        if (result) {
            return response.status(200).json({'message': 'Product updated successfully'});
        } else {
            return response.status(400).json({'message': 'Product not updated'});
        }
    }

}
const productsController = new ProductsController();
export default productsController;