import express from 'express';
import { getDeviceConfiguration } from '../controllers/deviceController.js';

const router = express.Router();

router.get('/configuration', getDeviceConfiguration);

export default router;
