import plansJson from '../../uploads/data/subscriptionInfo.json';
import { Plan } from '../models/plan.model';

// Handle both ESModule and CommonJS import styles
const plansData = (plansJson as any).default ? (plansJson as any).default : plansJson;

export const getAllPlans = (): Plan[] => {
    return plansData.plans;
};

export const getPlanById = (id: string): Plan | undefined => {
    return plansData.plans.find((plan: Plan) => plan.id === id);
};
