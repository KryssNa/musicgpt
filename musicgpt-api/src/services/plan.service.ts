import { Plan } from '../models/plan.model';

// In-memory database of subscription plans
const plans: Plan[] = [

    {
        "id": "plus",
        "name": "Plus",
        "popular": false,
        "price": {
            "monthly": 11.99,
            "yearly": 9.99
        },
        "features": {
            "monthly": [
                {
                    "title": "Generate 100 songs /month",
                    "description": "Create up to 100 AI-generated songs per month"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Standard tool",
                    "description": "Access to standard music creation tools"
                },
                {
                    "title": "Fastlane queue",
                    "description": "Generate songs at standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects"
                }
            ],
            "yearly": [
                {
                    "title": "Generate 1200 songs /year",
                    "description": "Create up to 1200 AI-generated songs annually"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Standard tool",
                    "description": "Access to standard music creation tools"
                },
                {
                    "title": "Fastlane queue",
                    "description": "Generate songs at standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects"
                }
            ]
        }
    },
    {
        "id": "pro",
        "name": "Pro",
        "popular": true,
        "price": {
            "monthly": 21.99,
            "yearly": 16.99
        },
        "features": {
            "monthly": [
                {
                    "title": "Generate 500 songs /month",
                    "description": "Create up to 500 AI-generated songs per month"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Unlock all features",
                    "description": "Access to all music creation tools and features"
                },
                {
                    "title": "Fast generation",
                    "description": "Generate songs at 2x the standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects"
                }
            ],
            "yearly": [
                {
                    "title": "Generate 6000 songs /year",
                    "description": "Create up to 6000 AI-generated songs annually"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Unlock all features",
                    "description": "Access to all music creation tools and features"
                },
                {
                    "title": "Fast generation",
                    "description": "Generate songs at 2x the standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects"
                }
            ]
        }
    },
    {
        "id": "ultra",
        "name": "Ultra",
        "popular": false,
        "price": {
            "monthly": 49.99,
            "yearly": 29.99
        },
        "features": {
            "monthly": [
                {
                    "title": "Unlimited generations",
                    "description": "Create unlimited AI-generated songs annually"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Unlock all features",
                    "description": "Access to all music creation tools and features"
                },
                {
                    "title": "Fast generation",
                    "description": "Generate songs at 4x the standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects with extended rights"
                }
            ],
            "yearly": [
                {
                    "title": "Unlimited generations",
                    "description": "Create unlimited AI-generated songs annually"
                },
                {
                    "title": "Unlimited downloads",
                    "description": "Download as many songs as you want"
                },
                {
                    "title": "Unlock all features",
                    "description": "Access to all music creation tools and features"
                },
                {
                    "title": "Fast generation",
                    "description": "Generate songs at 4x the standard speed"
                },
                {
                    "title": "Commercial use",
                    "description": "Use generated music for commercial projects with extended rights"
                }
            ]
        }
    }
]


/**
 * Get all subscription plans
 * @returns {Plan[]}
 */
export const getAllPlans = (): Plan[] => plans;

/**
 * Get a subscription plan by its ID
 * @param {string} id - Plan ID
 * @returns {Plan | undefined}
 */
export const getPlanById = (id: string): Plan | undefined => plans.find(plan => plan.id === id); 