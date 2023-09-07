import { Router } from 'express'
import {
    getAllProducts,
    getProduct,
    // updateProduct,
} from '../controllers/productsController'

const routerProduct = Router();

routerProduct.route('/products')
    .get(getAllProducts)

routerProduct.route('/products/:code')
    .get(getProduct)
    // .put(updateProduct);

export default routerProduct;