import express from 'express';
import {
    getOrders,
    updateOrderStatus,
} from '../../controllers/admin/adminOrderController.js';
import { protect } from '../../middleware/authMiddleware.js';   
import {adminOnly} from '../../middleware/adminmiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/', getOrders);
router.put("/:id", updateOrderStatus);

export default router;