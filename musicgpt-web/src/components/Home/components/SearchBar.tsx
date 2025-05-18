import { motion } from 'framer-motion';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="w-full max-w-[800px] mx-auto mt-10 relative">
            <motion.div
                className="w-full h-[126px] bg-[#262a2e]/60 backdrop-blur-sm rounded-[27px] shadow-[0_0_30px_0_rgba(0,0,0,0.05)] p-6 relative"
                whileHover={{ boxShadow: '0 0 35px 0 rgba(0,0,0,0.08)' }}
            >
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Describe your song"
                    className="flex-1 w-full h-auto text-[18px] bg-transparent px-1 text-[#e4e6e8] placeholder-[#6a6d73] border-none outline-none"
                />

                <div className="flex items-center gap-1.5 mt-6">
                    <motion.div
                        className="w-[37px] h-[37px] bg-[#262a2e]/70 rounded-[25px] border border-[#3a3e42] flex items-center justify-center cursor-pointer"
                        whileHover={{ backgroundColor: '#2a2e32' }}
                    >
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00033 17.0551C2.75033 17.0551 0.166992 14.4718 0.166992 11.2218V4.55509C0.166992 2.22176 2.00033 0.388428 4.33366 0.388428C6.66699 0.388428 8.50033 2.22176 8.50033 4.55509V11.2218C8.50033 12.6384 7.41699 13.7218 6.00033 13.7218C4.58366 13.7218 3.50033 12.6384 3.50033 11.2218V4.55509C3.50033 4.05509 3.83366 3.72176 4.33366 3.72176C4.83366 3.72176 5.16699 4.05509 5.16699 4.55509V11.2218C5.16699 11.7218 5.50033 12.0551 6.00033 12.0551C6.50033 12.0551 6.83366 11.7218 6.83366 11.2218V4.55509C6.83366 3.13843 5.75033 2.05509 4.33366 2.05509C2.91699 2.05509 1.83366 3.13843 1.83366 4.55509V11.2218C1.83366 13.5551 3.66699 15.3884 6.00033 15.3884C8.33366 15.3884 10.167 13.5551 10.167 11.2218V4.55509C10.167 4.05509 10.5003 3.72176 11.0003 3.72176C11.5003 3.72176 11.8337 4.05509 11.8337 4.55509V11.2218C11.8337 14.4718 9.25033 17.0551 6.00033 17.0551Z" fill="#BFC2C8" />
                        </svg>
                    </motion.div>



                    <motion.div
                        className="h-[37px] bg-[#262a2e]/70 rounded-[25px] border border-[#3a3e42] px-3 py-2 flex items-center gap-2 overflow-hidden cursor-pointer"
                        whileHover={{ backgroundColor: '#2a2e32' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0003 13.75C9.50033 13.75 9.16699 13.4167 9.16699 12.9167V7.08333C9.16699 6.58333 9.50033 6.25 10.0003 6.25C10.5003 6.25 10.8337 6.58333 10.8337 7.08333V12.9167C10.8337 13.4167 10.5003 13.75 10.0003 13.75Z" fill="#BFC2C8" />
                            <path d="M13.7503 16.25C13.2503 16.25 12.917 15.9167 12.917 15.4167V4.58333C12.917 4.08333 13.2503 3.75 13.7503 3.75C14.2503 3.75 14.5837 4.08333 14.5837 4.58333V15.4167C14.5837 15.9167 14.2503 16.25 13.7503 16.25Z" fill="#BFC2C8" />
                            <path d="M2.50033 13.75C2.00033 13.75 1.66699 13.4167 1.66699 12.9167V7.08333C1.66699 6.58333 2.00033 6.25 2.50033 6.25C3.00033 6.25 3.33366 6.58333 3.33366 7.08333V12.9167C3.33366 13.4167 3.00033 13.75 2.50033 13.75Z" fill="#BFC2C8" />
                            <path d="M17.5003 13.3334C17.0003 13.3334 16.667 13.0001 16.667 12.5001V7.50008C16.667 7.00008 17.0003 6.66675 17.5003 6.66675C18.0003 6.66675 18.3337 7.00008 18.3337 7.50008V12.5001C18.3337 13.0001 18.0003 13.3334 17.5003 13.3334Z" fill="#BFC2C8" />
                            <path d="M6.25033 19.1668C5.75033 19.1668 5.41699 18.8335 5.41699 18.3335V1.66683C5.41699 1.16683 5.75033 0.833496 6.25033 0.833496C6.75033 0.833496 7.08366 1.16683 7.08366 1.66683V18.3335C7.08366 18.8335 6.75033 19.1668 6.25033 19.1668Z" fill="#BFC2C8" />
                        </svg>
                        <span className="max-sm:hidden text-sm text-[#e4e6e8] tracking-wider">Instrumental</span>
                    </motion.div>

                    <motion.div
                        className="h-[37px] bg-[#262a2e]/70 rounded-[25px] border border-[#3a3e42] px-3 py-2 flex items-center gap-2 overflow-hidden cursor-pointer"
                        whileHover={{ backgroundColor: '#2a2e32' }}
                    >
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0013 1.6665V13.3332M1.16797 7.49984H12.8346" stroke="#BFC2C8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="max-sm:hidden text-sm text-[#e4e6e8] tracking-wider">Lyrics</span>

                    </motion.div>

                    <div className="flex ml-auto gap-2">
                        <motion.div
                            className="flex items-center gap-2 bg-[#262a2e]/70 rounded-[25px] px-3 py-2 cursor-pointer"
                            whileHover={{ backgroundColor: '#2a2e32' }}
                        >
                            <span className="text-sm text-[#e4e6e8] tracking-wider">Tools</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#E4E6E8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </motion.div>

                        <motion.div
                            className="w-[35px] h-[35px] bg-[#262a2e]/70 rounded-[25px] border border-[#3a3e42] flex items-center justify-center cursor-pointer"
                            whileHover={{ backgroundColor: '#2a2e32' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8L14 8M14 8L8 2M14 8L8 14" stroke="#BFC2C8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.div>


        </div>
    );
};

export default SearchBar;