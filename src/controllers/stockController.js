import { mockStocks } from '../models/stockModel.js';

export const getStocks = (req, res) => {
    console.log(`app data = ${JSON.stringify(req.method)}`.yellow);
    res.status(200).json(mockStocks);
};
