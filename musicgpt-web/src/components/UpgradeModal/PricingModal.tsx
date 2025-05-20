import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FeatureDisplay } from "./components/FeatureDisplays";
import ShimmerEffect from "./components/ShimmerEffect";
import { fetchPlansWithFallback } from "./utils/fetchPlansWithFallback";

// Props for the UpgradeModal
interface UpgradeModalProps {
    open: boolean; // Whether the modal is open
    onClose: () => void; // Function to close the modal
}

// Main UpgradeModal component
export default function UpgradeModal({ open, onClose }: UpgradeModalProps) {
    // State for hovered feature (for left pane animation)
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
    // Subscription plans loaded from JSON
    const [plans, setPlans] = useState<any[]>([]);
    // Currently selected plan
    const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");
    // Loading state for shimmer effect
    const [loading, setLoading] = useState<boolean>(true);
    // Billing cycle (monthly/yearly)
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
    // Initial loading state for entrance animation
    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';



    // Fetch plans when modal opens
    useEffect(() => {
        if (open) {
            const fetchPlans = async () => {
                setLoading(true);
                setInitialLoading(true);

                try {
                    // Simulate network delay for shimmer effect demonstration
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    const plans = await fetchPlansWithFallback();
                    setPlans(plans);
                    setSelectedPlanId(plans.find((p: any) => p.id === "pro") ? "pro" : plans[0]?.id);
                } catch (e) {
                    setPlans([]);
                } finally {
                    setLoading(false);
                    setTimeout(() => {
                        setInitialLoading(false);
                    }, 500);
                }
            };
            fetchPlans();
        }
    }, [open]);

    // Hide modal if not open
    if (!open) return null;

    // Animation variants for modal sections
    const leftSideVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.4, ease: "easeIn" } }
    };

    const rightSideVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.4, ease: "easeIn" } }
    };

    const containerVariants = {
        initial: { scale: 0.92, opacity: 0, y: 60 },
        animate: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.45, type: "spring", stiffness: 120 } },
        exit: { scale: 0.92, opacity: 0, y: 60, transition: { duration: 0.25 } }
    };

    // Get selected plan and its features
    const selectedPlan = !loading && plans.length ? plans.find((plan) => plan.id === selectedPlanId) || plans[0] : null;
    const features = selectedPlan ? (selectedPlan.features?.[billingCycle] || []).map((f: { title: string; description: string; image?: string }, i: number) => {
        let imageUrl = f.image || "/assets/images/popup/default.png";
        if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('https') && imageUrl.startsWith('/uploads/')) {
            imageUrl = `${backendUrl}/api/v1${imageUrl}`;
        }
        return {
            id: f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            text: f.title,
            description: f.description,
            image: imageUrl
        };
    }) : [];

    // Get plan price for selected billing cycle
    const planPrice = selectedPlan?.price?.[billingCycle] || 0;

    // Render left side (feature image or shimmer)
    const renderLeftSide = () => {
        if (loading || initialLoading) {
            return (
                <motion.div
                    className="w-full h-full rounded-sm"
                    variants={leftSideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <ShimmerEffect className="w-full h-full max-md:rounded-t-lg md:rounded-l-lg" />
                </motion.div>
            );
        }

        // Show animated feature image if hovered
        const feature = features.find((f: any) => f.id === hoveredFeature);
        return (
            <AnimatePresence mode="wait" initial={false}>
                {feature ? (
                    <FeatureDisplay key={feature.id} image={feature.image} alt={feature.text} />
                ) : (
                    <motion.div
                        key="default"
                        className="w-full h-full"
                        initial={{ opacity: 0, x: 40, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
                        exit={{ opacity: 0, x: -40, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } }}
                    >
                        <Image
                            src="/assets/images/popup/default.png"
                            alt="Music Icon"
                            className="w-full h-full mb-4 object-cover"
                            width={400}
                            height={220}
                            priority={false}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    // Render shimmer placeholders for features
    const renderFeatureShimmers = () => {
        return Array(5).fill(0).map((_, index) => (
            <motion.div
                key={`shimmer-feature-${index}`}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            >
                <ShimmerEffect className="w-5 h-5 rounded-full" />
                <ShimmerEffect className="w-48 h-4 rounded-full" />
            </motion.div>
        ));
    };

    // Render shimmer placeholder for price
    const renderPriceShimmer = () => (
        <motion.div
            className="pt-6 pb-[12px] flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <ShimmerEffect className="w-36 h-10 rounded-lg" />
            <ShimmerEffect className="w-48 h-4 rounded-full" />
        </motion.div>
    );

    // Main modal render
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 pt-4 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                    exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        className="flex flex-col sm:flex-row w-full max-w-[94vw] md:max-w-[760px] lg:max-w-[800px] h-full max-h-[94vh] sm:max-h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ minHeight: '400px' }}
                    >
                        {/* Left side - Dynamic content */}
                        <motion.div
                            className="w-full sm:w-[400px] h-[220px] sm:h-full"
                            variants={leftSideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {renderLeftSide()}
                        </motion.div>
                        {/* close button */}
                        <motion.button
                            className="absolute top-7 right-4 sm:top-16 sm:right-8 z-10 md:hidden"
                            onClick={onClose}
                        >
                            <XIcon className="w-6 h-6" />
                        </motion.button>

                        {/* Right side - Pricing */}
                        <motion.div
                            className="w-full sm:w-[400px] bg-[#16191c] text-white px-4 sm:px-8 py-4 sm:py-12 flex flex-col justify-between relative overflow-y-auto max-h-[calc(95vh-32px)] sm:max-h-full max-md:rounded-b-xl"
                            variants={rightSideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {/* Modal title */}
                            <motion.h2
                                className="text-[20px] sm:text-[32px] font-semibold leading-tight sm:leading-[38.727px] text-[#e4e6e8] mb-3 sm:mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Unlock the future of music.
                            </motion.h2>


                            {/* Plan Selection */}
                            <motion.div className="flex gap-2 sm:gap-3 pt-2 sm:pt-[9px] pb-6 sm:pb-[28px]">
                                {loading || initialLoading ? (
                                    <>
                                        <motion.div
                                            className="flex-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                        >
                                            <ShimmerEffect className="w-full h-[48px] sm:h-[60px] rounded-xl" />
                                        </motion.div>
                                        <motion.div
                                            className="flex-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                        >
                                            <ShimmerEffect className="w-full h-[48px] sm:h-[60px] rounded-xl" />
                                        </motion.div>
                                        <motion.div
                                            className="flex-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                        >
                                            <ShimmerEffect className="w-full h-[48px] sm:h-[60px] rounded-xl" />
                                        </motion.div>
                                    </>
                                ) :
                                    (plans.map((plan) => (
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: 'spring', stiffness: 100 }}
                                            key={plan.id} className="relative flex-1"
                                        >
                                            {plan.popular && (
                                                <div className="absolute -top-2 left-[20%] md:left-[18px] flex justify-center max-w-[70px] max-h-[25px] z-10">
                                                    <span className="px-3 py-0.5 bg-white text-black text-xs font-medium rounded-full">
                                                        Popular
                                                    </span>
                                                </div>
                                            )}
                                            <motion.button
                                                className={`w-full h-[48px] sm:h-[60px] py-2 sm:py-3 px-2 sm:px-4 font-semibold text-[15px] sm:text-[16px] leading-[21px] rounded-xl cursor-pointer ${selectedPlanId === plan.id
                                                    ? 'border-2 border-white bg-[#262A2E]'
                                                    : 'border border-[#3A3E42] bg-transparent'
                                                    }`}
                                                onClick={() => setSelectedPlanId(plan.id)}
                                            >
                                                {plan.name}
                                            </motion.button>
                                        </motion.div>
                                    ))
                                    )}
                            </motion.div>

                            {/* Features */}
                            <motion.div className="space-y-2" initial="hidden" animate="visible" variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.3,
                                    },
                                },
                            }}>
                                {loading || initialLoading ? (
                                    renderFeatureShimmers()
                                ) : (
                                    features.map((feature: any, index: number) => (
                                        <motion.span
                                            key={feature.id}
                                            className="flex items-center gap-2 group cursor-pointer w-fit"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.08 }}
                                            onMouseEnter={() => setHoveredFeature(feature.id)}
                                            onMouseLeave={() => setHoveredFeature(null)}
                                        >
                                            {/* Checkmark icon */}
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white transition-all duration-300">
                                                <path d="M16.6673 5.5L7.50065 14.6667L3.33398 10.5" stroke="#777A80" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-all duration-300" />
                                            </svg>

                                            <span className="text-[13px] sm:text-[14px] font-medium text-[#777A80] group-hover:text-[#E4E6E8]">{feature.text}</span>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#E4E6E8] transition-all duration-300">
                                                <g clipPath="url(#clip0_2017_1413)">
                                                    <path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#777A80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#E4E6E8] transition-all duration-300 cursor-pointer" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2017_1413">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </motion.span>
                                    ))
                                )}
                            </motion.div>

                            {/* Price */}
                            <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                                {loading || initialLoading ? (
                                    renderPriceShimmer()
                                ) : (
                                    <motion.div className="pt-4 sm:pt-6 pb-2 sm:pb-[12px] flex flex-col -gap-[1px]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <div className="text-[26px] sm:text-[32px] font-semibold text-[#E4E6E8] tracking-[0.6px]">${planPrice.toFixed(2)}</div>
                                        <div className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#BFC2C8] relative group">
                                            USD per month{billingCycle === 'monthly' ? ', billed monthly' : ', billed yearly'}
                                            <span className="ml-1 flex items-center">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#E4E6E8] transition-all duration-300 cursor-pointer">
                                                    <g clipPath="url(#clip0_2017_1413)">
                                                        <path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#777A80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#E4E6E8] transition-all duration-300 cursor-pointer" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2017_1413">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            {/* Popup toggle on hover */}
                                            <div className="absolute left-[80%] bottom-[120%] z-[9999] opacity-0 invisible group-hover:opacity-100 group-hover:visible flex-col gap-4 items-stretch min-w-[170px] bg-[#181B1F] rounded-xl shadow-lg px-2 py-3 transition-all duration-200 before:absolute before:inset-0 before:rounded-xl before:bg-[linear-gradient(90deg,_#C800FF_0%,_#FF2C9B_31%,_#FF7B00_70%,_#FF8504_88%,_#FFD363_100%)] before:animate-gradient-x before:bg-[length:200%_100%] before:-z-10 before:p-[1px] before:content-[''] before:blur-[1px]">
                                                <div className="absolute inset-0 bg-[#181B1F] rounded-xl -z-10"></div>
                                                <button
                                                    onClick={() => setBillingCycle('monthly')}
                                                    className={`w-full px-3 py-1 mb-2 rounded-md text-[13px] font-medium text-left transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-[#23272b] hover:to-[#2a2f35] cursor-pointer ${billingCycle === 'monthly'
                                                        ? 'bg-[#23272b] text-white shadow'
                                                        : 'text-[#BFC2C8] hover:text-white'
                                                        }`}
                                                >
                                                    Monthly billing
                                                </button>
                                                <button
                                                    onClick={() => setBillingCycle('yearly')}
                                                    className={`w-full px-3 py-1 rounded-md text-[13px] font-medium text-left transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-[#23272b] hover:to-[#2a2f35] cursor-pointer ${billingCycle === 'yearly'
                                                        ? 'bg-[#23272b] text-white shadow'
                                                        : 'text-[#BFC2C8] hover:text-white'
                                                        }`}
                                                >
                                                    Yearly billing
                                                </button>
                                                {billingCycle === 'yearly' && (
                                                    <span className="text-[#4ade80] text-[12px] font-medium mt-1 whitespace-nowrap px-3">
                                                        Save up to {
                                                            Math.round(
                                                                ((selectedPlan.price.monthly - selectedPlan.price.yearly)
                                                                    / selectedPlan.price.monthly)
                                                                * 100
                                                            )
                                                        }%  </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className={`w-full py-4 sm:py-[17px] cursor-pointer ${loading || initialLoading ? 'bg-[#23272b]' : 'bg-white'} text-black rounded-xl font-semibold flex items-center justify-center gap-2 mt-4 sm:mt-0`}
                                whileHover={{ scale: 1.03, }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 250 }}
                                disabled={loading || initialLoading}
                                onClick={() => window.open("https://www.musicgpt.com", "_blank")}
                            >
                                {loading || initialLoading ? (
                                    <></>
                                    // <ShimmerEffect className="w-48 h-6 rounded-full" />
                                ) : (
                                    <>
                                        <span className="text-[15px] sm:text-[16px] font-semibold leading-[21px] text-[#16191c]">Unlock {selectedPlan.name} features</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}