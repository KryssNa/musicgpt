import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import './config';
import { ENV } from './config/env';
import errorHandler from './middleware/errorHandler';
import subscriptionPlanRoutes from './routes/plan.routes';

// Create Express app instance
const app = express();

// Security middleware
app.use(helmet());

// Enable CORS with configurable origin from environment variable
const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (!origin || ENV.CORS_ORIGIN.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// HTTP request logger
app.use(morgan('dev'));

// Serve static files from the public directory
app.use(express.static(__dirname));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API versioning
const API_VERSION = '/api/v1';

//image routes
app.use(`${API_VERSION}/uploads`, express.static(path.join(__dirname, '../uploads')));

// Routes
app.use(`${API_VERSION}/subscription-plans`, subscriptionPlanRoutes);
app.use(errorHandler);

export default app; 