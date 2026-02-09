import express from 'express';
import {
    getUsers,
    toggleUserBlock,
} from '../../controllers/admin/adminUserController.js';
import { protect } from '../../middleware/authMiddleware.js';   
import {adminOnly} from '../../middleware/adminmiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/', getUsers);
router.put('/:id/status', toggleUserBlock);

export default router;