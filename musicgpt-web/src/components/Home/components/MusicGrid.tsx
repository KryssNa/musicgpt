import { motion } from 'framer-motion';
import React from 'react';
import MusicCard from './MusicCard';

// Sample data for music cards
const musicData = [
    {
        image: "/assets/images/music/1.svg",
        overlay: "/assets/images/music/1.svg",
        // playIcon: "/assets/images/music/1.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/2.svg",
        overlay: "/assets/images/music/2.svg",
        playIcon: "/assets/images/music/2.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/3.svg",
        overlay: "/assets/images/music/3.svg",
        // playIcon: "/assets/images/music/3.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/4.svg",
        overlay: "/assets/images/music/4.svg",
        playIcon: "/assets/images/music/4.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/5.svg",
        overlay: "/assets/images/music/5.svg",
        // playIcon: "/assets/images/music/5.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/6.svg",
        overlay: "/assets/images/music/6.svg",
        playIcon: "/assets/images/music/6.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/7.svg",
        overlay: "",
        // playIcon: "/assets/images/music/7.svg",
        likes: "3M Likes"
    },
    {
        image: "/assets/images/music/8.svg",
        overlay: "",
        // playIcon: "/assets/images/music/8.svg",
        likes: "234K Likes",
        // title: "Classical",
        
    },
    {
        image: "/assets/images/music/9.svg",
        overlay: "",
        // playIcon: "/assets/images/music/9.svg",
        likes: "69K Likes",
        // title: "Sound FX",
        
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const MusicGrid: React.FC = () => {
    return (
        <motion.div
            className="flex overflow-x-auto gap-10 px-10 pb-4 hide-scrollbar"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {musicData.map((item, index) => (
                <MusicCard
                    key={index}
                    image={item.image}
                    overlay={item.overlay}
                    playIcon={item.playIcon || ""}
                    likes={item.likes}
                    // title={item.title}
                    // badge={item.badge}
                />
            ))}
        </motion.div>
    );
};

export default MusicGrid;