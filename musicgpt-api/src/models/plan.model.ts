export interface PlanFeature {
    title: string;
    description: string;
}

export interface Plan {
    id: string;
    name: string;
    popular: boolean;
    price: {
        monthly: number;
        yearly: number;
    };
    features: {
        monthly: PlanFeature[];
        yearly: PlanFeature[];
    };
} 