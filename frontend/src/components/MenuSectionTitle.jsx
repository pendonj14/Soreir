export const MenuSectionTitle = ({ title }) => (
  <div className="flex items-center justify-center gap-4 py-12">
    <div className="w-2 h-2 rotate-45 border border-white/30"></div>
    <h2 className="text-[#f4ecd8] font-serif text-3xl tracking-[0.15em] uppercase">{title}</h2>
    <div className="w-2 h-2 rotate-45 border border-white/30"></div>
  </div>
);
