import axios from 'axios';

export interface Plan {
    id: string;
    name: string;
    price: any;
    billing?: string;
    features: any;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPlans = async (): Promise<Plan[]> => {
    const res = await axios.get(`${API_URL}/api/v1/subscription-plans`);
    // The backend now returns { apiCode, message, payload }
    return res.data.payload || [];
}; 