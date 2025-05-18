import { motion } from 'framer-motion';
import React from 'react';

interface ActionButtonProps {
  icon: any;
  label: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => {
  return (
    <motion.button
      className="action-button flex flex-row items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-[#3a3e42] bg-transparent transition-colors duration-200 min-w-[140px] "
      variants={item}
      whileHover={{
        backgroundColor: 'rgba(38, 42, 46, 0.3)',
        borderColor: '#3a3e42'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-6 h-6 sm:w-5 sm:h-5 text-[#E4E6E8]">
        {icon}
      </div>
      <span className="text-xs sm:text-sm tracking-wider mt-1 sm:mt-0">{label}</span>
    </motion.button>
  );
};

export default ActionButton;
