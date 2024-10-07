// routes/orderRoutes.js
import express from 'express';
import {
    sendLensOrder,
    sendNonConsignmentOrder,
    emailOrderAsCsv,
    getAllOrders
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/consignment', sendLensOrder);
router.post('/standard', sendNonConsignmentOrder);
router.post('/email', emailOrderAsCsv);
router.get('/', getAllOrders);

export default router;
