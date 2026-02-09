import express from 'express';
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} from '../../controllers/admin/admincategoryControllers.js';
import { protect } from '../../middleware/authMiddleware.js';   
import {adminOnly} from '../../middleware/adminmiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.post('/', createCategory);
router.get('/', getCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;