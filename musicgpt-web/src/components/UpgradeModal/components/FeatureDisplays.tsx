import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants for feature images
const imageVariants = {
    initial: { opacity: 0, x: 40, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -40, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } },
};

// Dynamic feature display component
export const FeatureDisplay = ({ image, alt = "Feature Image" }: { image: string, alt?: string }) => (
    <motion.div className="w-full h-full"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Image
            src={image}
            alt={alt}
            className="w-full h-full mb-4 object-cover"
            width={400}
            height={220}
            priority={true}
            loading="eager"
            referrerPolicy='no-referrer'
            
        />
    </motion.div>
);