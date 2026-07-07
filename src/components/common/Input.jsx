const Input = ({ placeholder, type = "text", className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#1E3A5F] transition ${className}`}
  />
);

export default Input;
