import PricingModal from '@/components/UpgradeModal/PricingModal';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Header: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setModalOpen(false);
            }
        };

        if (modalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalOpen]);

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className=" text-white px-0 sm:px-8 pb-8">
            <header className="w-full relative z-30 py-2">
                <div className="w-full h-full bg-cover bg-no-repeat top-0 left-6" />

                <div className="flex justify-between items-center w-full px-5">
                    <div className="flex items-center">
                        <img src="/assets/icons/logo.svg" alt="logo" className='w-[36px] h-[35px]' />
                        <span className="text-white text-lg font-medium ml-2">MusicGPT</span>
                        <motion.div
                            className="flex justify-center items-center px-2 py-1.5 ml-3 rounded-md border border-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-xs font-medium text-white">Beta</span>
                        </motion.div>
                    </div>

                    <div className="flex items-center gap-1 md:gap-4">
                        <motion.div
                            className="flex items-center gap-4 min-md:bg-gradient-to-br from-[#3F3129] via-[#2c231e] to-[#202328] rounded-2xl md:px-5 py-3 shadow-none"
                        >
                            <div className="max-md:hidden flex flex-col">
                                <span className="text-base font-medium text-[#e4e6e8] leading-5">Get unlimited AI Music</span>
                                <span className="text-xs text-[#bfc2c8] mt-0.5">100 free credits left</span>
                            </div>
                            <motion.button
                                className="bg-[#e4e6e8] text-[#16191c] px-5 py-2 rounded-lg font-medium text-base shadow-none hover:bg-white/85 transition-all duration-300 cursor-pointer"

                                onClick={() => setModalOpen(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Upgrade
                            </motion.button>
                        </motion.div>

                        <div className="relative w-11 h-11 flex items-center justify-center">
                            <div className="w-full h-full border border-[#bfc2c8]/30 rounded-full flex items-center justify-center" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-[#e4e6e8] font-medium">J</span>
                            <div className="absolute -top-1.5 -right-1.5">
                                <div className="w-5 h-5 bg-[#2DF48F] rounded-full flex items-center justify-center border-2 border-[#16191c]">
                                    <span className="text-[11px] font-semibold text-[#16191c]">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div ref={modalRef}>
                <PricingModal open={modalOpen} onClose={handleModalClose} />
            </div>
        </div>
    );
};

export default Header;