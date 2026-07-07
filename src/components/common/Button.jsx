const Button = ({ children }) => {
  return (
    <button className="bg-[#1E3A5F] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#27486d]">
      {children}
    </button>
  );
};

export default Button;
