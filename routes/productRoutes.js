import express from 'express';
import {
    getAllProducts,
    getProductById
} from '../controllers/productController.js';

const router = express.Router();
// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;