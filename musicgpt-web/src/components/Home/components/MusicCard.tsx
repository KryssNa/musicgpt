import { motion } from 'framer-motion';
import React from 'react';

interface MusicCardProps {
    image: string;
    overlay?: string;
    playIcon: string;
    likes: string;
    title?: string;
    badge?: {
        icon: string;
        overlay: string;
    };
}

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
};

const MusicCard: React.FC<MusicCardProps> = ({
    image,
    overlay,
    playIcon,
    likes,
    title,
    badge
}) => {
    return (
        <motion.article
            className="music-card w-[201px]"
            variants={item}
        >
            <div className="h-[210px] w-full relative">
                <motion.div
                    className="music-card-image"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                >
                    <div
                        className="w-full h-full bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0"
                        style={{ backgroundImage: `url(${image})` }}
                    />

                    {overlay && (
                        <div
                            className="w-full h-full bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 overflow-hidden"
                            style={{ backgroundImage: `url(${overlay})` }}
                        />
                    )}

                    {badge && (
                        <>
                            <div
                                className="w-8 h-8 bg-cover bg-no-repeat rounded-full absolute top-[10.5px] left-[13px] z-10"
                                style={{ backgroundImage: `url(${badge.icon})` }}
                            />
                            <div
                                className="w-6 h-[23.333px] bg-cover bg-no-repeat absolute top-[14.5px] left-[17px] z-20"
                                style={{ backgroundImage: `url(${badge.overlay})` }}
                            />
                        </>
                    )}

                    <motion.div
                        className="play-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div
                            className="w-[21.887px] h-[28.153px] bg-[length:100%_100%] bg-no-repeat mx-auto mt-1"
                            style={{ backgroundImage: `url(${playIcon})` }}
                        />
                    </motion.div>

                    {title && (
                        <span className="absolute bottom-5 left-5 text-2xl font-medium text-white">
                            {title}
                        </span>
                    )}
                </motion.div>
            </div>

            <span className="text-base text-[#777a80]">{likes}</span>
        </motion.article>
    );
};

export default MusicCard;