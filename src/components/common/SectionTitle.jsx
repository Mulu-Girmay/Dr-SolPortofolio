const SectionTitle = ({ label, title, subtitle, light = false }) => (
  <div className="mb-10">
    {label && (
      <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${light ? "text-blue-300" : "text-[#1E3A5F]"}`}>
        {label}
      </p>
    )}
    <h2 className={`text-3xl md:text-4xl font-serif font-bold leading-tight ${light ? "text-white" : "text-[#0F172A]"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 text-sm leading-relaxed max-w-sm ${light ? "text-blue-100" : "text-[#475569]"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
