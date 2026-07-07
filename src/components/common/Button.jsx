const Button = ({ children, variant = "primary", arrow = false, className = "", onClick }) => {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer";
  const variants = {
    primary: "bg-[#1E3A5F] text-white hover:bg-[#2D5A88]",
    outline: "border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white",
    white: "bg-white text-[#1E3A5F] hover:bg-gray-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
      {arrow && <span>→</span>}
    </button>
  );
};

export default Button;
