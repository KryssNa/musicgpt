import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { getAllPlans, getPlanById } from '../services/plan.service';
import { ApiNotFound, ApiSuccess } from '../utils/apiResponse';

/**
 * Fetches all available subscription plans
 * Endpoint: GET /api/plans
 * Public access
 */
export const getPlans = asyncHandler((req: Request, res: Response): void => {
    new ApiSuccess('Subscription plans retrieved', getAllPlans()).send(res);
});

/**
 * Fetches a specific subscription plan by its ID
 * Endpoint: GET /api/plans/:id
 * Public access
 */
export const getPlan = asyncHandler((req: Request, res: Response, next: NextFunction): void => {
    const plan = getPlanById(req.params.id);
    if (!plan) {
        new ApiNotFound('Requested plan does not exist').send(res);
        return;
    }
    new ApiSuccess('Subscription plan retrieved', plan).send(res);
});