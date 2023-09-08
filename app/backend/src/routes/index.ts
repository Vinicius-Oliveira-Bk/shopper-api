import { Router } from 'express'
import { shopperApi } from '../controllers/index'

const router = Router();

router.route('/')
    .get(shopperApi);

export default router;