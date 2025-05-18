import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { getAllPlans, getPlanById } from '../services/plan.service';

/**
 * @desc    Get all subscription plans
 * @route   GET /api/plans
 * @access  Public
 */
export const getPlans = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
        status: 200,
        message: 'Plans fetched successfully',
        data: getAllPlans(),
    });
});

/**
 * @desc    Get a single subscription plan by ID
 * @route   GET /api/plans/:id
 * @access  Public
 */
export const getPlan = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const plan = getPlanById(req.params.id);
    if (!plan) {
        res.status(404);
        return next(new Error('Plan not found'));
    }
    res.status(200).json({
        status: 200,
        message: 'Plan fetched successfully',
        data: plan,
    });
}); 