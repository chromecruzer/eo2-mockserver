import { mockDeviceConfiguration } from '../models/deviceModel.js';

export const getDeviceConfiguration = (req, res) => {
    console.log(`app data = ${JSON.stringify(req.method)}`.blue);
    res.status(200).json(mockDeviceConfiguration);
};
