import express from 'express';
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from '../../controllers/admin/adminproductController.js';
import { protect } from '../../middleware/authMiddleware.js';   
import {adminOnly} from '../../middleware/adminmiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;