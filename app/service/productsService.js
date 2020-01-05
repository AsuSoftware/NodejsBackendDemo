class ProductsService {
    
    constructor() {
        this._products = [];
    }

    findAll() {
        return this._products;
    }

    create(product) {
        this._products.push(product);
        return this.findAll();
    }

    deleteById(productId) {
        this._products = this._products
            .filter(product => product.id != productId);
        return this.findAll();
    }

    findById(productId) {
        return this._products
            .filter(product => product.id == productId);
    }

    update(productId, product) {
        if (productId != product.id) return false;
        this._products = this._products
            .filter(p => p.id != productId);
        this._products.push(product);
        return true;
    }

}
const productsService = new ProductsService();
export default productsService;