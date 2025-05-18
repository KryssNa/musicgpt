const ShimmerEffect = ({ className }: { className: string }) => (
    <div className={`relative overflow-hidden bg-[#23272b] ${className}`}>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#2a2f35]/10 via-[#2a2f35]/20 to-[#2a2f35]/10 z-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2f35]/10 to-[#2a2f35]/20 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2f35]/5 via-[#2a2f35]/10 to-[#2a2f35]/5" />
    </div>
);

export default ShimmerEffect;