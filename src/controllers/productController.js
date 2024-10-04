import { mockProducts } from '../models/productModel.js';

export const getProducts = (req, res) => {
    console.log(`app data = ${JSON.stringify(req.method)}`.green);
    res.status(200).json(mockProducts);
};
