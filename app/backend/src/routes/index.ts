import { Router } from 'express'
import { getAllProducts, getProduct, getAllPacks, getPack, updatePost } from '../repositories/mysql-get-products'

const router = Router();

router.route('/products')
    .get(getAllProducts)
    .put(updatePost);

router.route('/products/:code')
    .get(getProduct)

router.route('/packs')
    .get(getAllPacks)

router.route('/packs/:code')
    .get(getPack)

export default router;
