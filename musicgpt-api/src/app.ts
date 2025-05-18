import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import './config';
import { ENV } from './config/env';
import errorHandler from './middleware/errorHandler';
import subscriptionPlanRoutes from './routes/plan.routes';

// Create Express app instance
const app = express();

// Security middleware
app.use(helmet());

// Enable CORS with configurable origin from environment variable
app.use(cors({
    origin: ENV.CORS_ORIGIN,
}));

// Parse JSON bodies
app.use(express.json());

// HTTP request logger
app.use(morgan('dev'));

// API versioning
const API_VERSION = '/api/v1';

// Routes
app.use(`${API_VERSION}/subscription-plans`, subscriptionPlanRoutes);
app.use(errorHandler);

export default app; 