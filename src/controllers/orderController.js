// controllers/orderController.js
import { dump } from '../../app.js';
import { createOrder, getOrders } from '../models/orderModel.js';

export const sendLensOrder = (req, res) => {
    const order = req.body;
    const createdOrder = createOrder(order);
    console.log(dump({ message: `LENS ORDER DATA -`, data: createdOrder }));
    res.status(201).json(createdOrder);
};

export const sendNonConsignmentOrder = (req, res) => {
    const order = req.body;
    const createdOrder = createOrder(order);
    console.log(`CONSIGNMENTS DATA - ${createdOrder}`.magenta)
    res.status(201).json(createdOrder);
};

export const emailOrderAsCsv = (req, res) => {
    const { email, orderId } = req.body;
    console.log(`Emails - ${email} / ${orderId}`.blue)
    res.status(200).json({ message: `Order ${orderId} sent to ${email}` });
};

export const getAllOrders = (req, res) => {
    const orders = getOrders();
    console.table(orders)
    res.status(200).json(orders);
};
