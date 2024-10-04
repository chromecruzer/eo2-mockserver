import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { marked } from 'marked'; // Import the marked package
import path from 'path';
import fs from 'fs'
import 'colors';
import util from 'util';
import deviceRoutes from './src/routes/deviceRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import stockRoutes from './src/routes/stockRoutes.js';

const app = express();
const port = process.env.PORT || 3200;
const host = process.env.HOST || '0.0.0.0';
const dump = (obj, depth = null) => util.inspect(obj, { depth, colors: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', async (req, res) => {
    res.status(200).json({ msg: `EyeOrder2 Node-js Mock server is active for Testing`, supportedApps: `Bill And Replace (Android 7+ especially for Honeywell EDA52 devices)` });
});

// help and info route

app.get('/info', (req, res) => {
    const filePath = path.join(__dirname, 'README.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading file');
        }
        const htmlContent = marked(data); // Convert Markdown to HTML
        res.send(htmlContent); // Send the HTML response
    });
});

app.post('/api/registrations', async (req, res) => {
    const eyeorderRegister = req.body;
    res.status(200);
    console.log(`app data = ${dump(eyeorderRegister)}`.blue);
});

// Use the routes
app.use('/api/devices', deviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/stock', stockRoutes);

app.listen(port, host, () => {
    console.log(`server is listening @ *** http://${host === '0.0.0.0' ? 'localhost' : host}:${port} ***`.america.bgMagenta);
});
