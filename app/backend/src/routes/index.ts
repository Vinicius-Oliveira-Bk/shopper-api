import { Router } from 'express';
import getAllProducts from '../controllers/index';

const router = Router();

router.get('/', getAllProducts)

export default router;
