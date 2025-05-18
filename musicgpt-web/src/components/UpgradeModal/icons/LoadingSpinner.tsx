import React from 'react';

const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="4" opacity="0.2" />
        <path d="M30 16a14 14 0 0 0-14-14" stroke="#fff" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
        </path>
    </svg>
);

export default LoadingSpinner; 