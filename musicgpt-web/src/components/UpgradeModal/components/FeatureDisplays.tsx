import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants for feature images
const imageVariants = {
    initial: { opacity: 0, x: 40, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -40, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } },
};

// Display for song generation feature
export const SongsDisplay = () => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src="/assets/images/popup/image1.svg"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={false}
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
            src="/assets/images/popup/image2.svg"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={false}
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
            priority={false}
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
            priority={false}
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
            src="/assets/images/popup/image.svg"
            alt="Music Icon"
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={false}
        />
    </motion.div>
); 