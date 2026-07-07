const Badge = ({ children, className = "" }) => (
  <span className={`inline-block bg-blue-100 text-[#1E3A5F] text-xs font-semibold px-3 py-1 rounded-full ${className}`}>
    {children}
  </span>
);

export default Badge;
