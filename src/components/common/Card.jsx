const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] ${className}`}>
    {children}
  </div>
);

export default Card;
