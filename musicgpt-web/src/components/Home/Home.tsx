"use client"
import { motion } from 'framer-motion';
import React from 'react';
import ActionButtons from './components/ActionButtons';
import Header from './components/Header';
import MusicGrid from './components/MusicGrid';
import SearchBar from './components/SearchBar';

const MusicGPTPage: React.FC = () => {
    return (
        <div className="max-w-[1512px] mx-auto overflow-x-hidden relative">
            <motion.div
                className="absolute  top-0 h-[700px] md:h-[500px] w-[80%] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#5d0e5e] via-[#7B2CBF]/10 to-transparent pointer-events-none rounded-full blur-[100px]"
                
                initial={{ opacity: 0, y: -50 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ['100% 0%', '50% 50%', '100% 0%']
                }}
                transition={{
                    opacity: { duration: 1 },
                    y: { duration: 1.5, ease: "easeOut" },
                    backgroundPosition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                style={{
                    backgroundSize: '200% 200%'
                }}
            />
            <Header />

            <main className="px-5 relative">
                <motion.h1
                    className="text-[32px] font-medium text-[#e4e6e8] text-center mt-[100px] md:mt-[156px] tracking-[0.64px]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    What song to create?
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <SearchBar />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ActionButtons />
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-[100px] md:mt-[165px]"
                >
                    <MusicGrid />
                </motion.section>
            </main>
        </div>
    );
};

export default MusicGPTPage;