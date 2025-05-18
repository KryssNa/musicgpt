import { Router } from 'express';
import { getPlan, getPlans } from '../controllers/plan.controller';

const router = Router();

/**
 * @route   GET /api/plans
 * @desc    Get all subscription plans
 */
router.get('/', getPlans);

/**
 * @route   GET /api/plans/:id
 * @desc    Get a single subscription plan by ID
 */
router.get('/:id', getPlan);

/**
 * @route   GET /api/plans/health
 * @desc    Health check endpoint
 */
router.get('/health', (req, res) => {
    res.status(200).json({ status: 200, message: 'API is healthy' });
});

export default router; 