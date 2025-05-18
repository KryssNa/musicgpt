import { fetchPlans as fetchApiPlans, Plan } from './fetchPlans';

export const fetchPlansWithFallback = async (): Promise<Plan[]> => {
    try {
        // Try fetching from API first
        const apiPlans = await fetchApiPlans();
        if (apiPlans && apiPlans.length > 0) return apiPlans;
        throw new Error('No plans from API');
    } catch (e) {
        // Fallback to local JSON
        try {
            const res = await fetch('/assets/data/plans.json');
            const data = await res.json();
            return data.plans || [];
        } catch (err) {
            return [];
        }
    }
}; 