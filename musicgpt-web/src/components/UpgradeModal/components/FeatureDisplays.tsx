import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants for feature images
const imageVariants = {
    initial: { opacity: 0, x: 40, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -40, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } },
};

// Display for 5k credits feature
export const FiveThousandCredits = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/5kcredit.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for 25k credits feature
export const TwentyFiveThousandCredits = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/25kcredit.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for unlimited credits feature
export const UnlimitedCredits = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/unlimitedcredit.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);
// Display for standard tone feature
export const StandardTool = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/standard-tool.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for core features
export const CoreFeatures = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/core_features.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);
// Display for unlock all features
export const UnlockAllFeatures = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/unlock_all_features.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for fast lane queue feature
export const FastLaneQueue = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/fastlan_ques.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for fast gen feature
export const FastGen = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/fast_gen.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);



// Display for downloads feature
export const DownloadsDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/unlimitedDownload.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for unlock features
export const FeaturesDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/image3.svg"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for advanced generation feature
export const GenerationDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/image4.svg"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);

// Display for commercial use feature
export const CommercialDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/commercial_use.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);
// Display for default feature
export const DefaultDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/default.png"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
        />
    </motion.div>
);