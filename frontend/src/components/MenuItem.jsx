export const MenuItem = ({ name, description, price, image }) => (
  <div className="flex gap-6 items-start group">
    {/* Thumbnail */}
    <div className="w-24 h-16 shrink-0 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-1">
      <img src={image} alt={name} className="object-contain w-full h-full drop-shadow-lg" />
    </div>
    
    {/* Details */}
    <div className="flex-1 pt-1">
      <div className="flex items-baseline w-full">
        <h3 className="text-[#f4ecd8] font-serif text-lg tracking-wide uppercase">{name}</h3>
        {/* Dotted Leader Line */}
        <div className="flex-1 mx-4 border-b-[1px] border-dotted border-white/20 relative top-[-6px]"></div>
        <span className="text-[#f4ecd8] font-serif text-lg">${price}</span>
      </div>
      <p className="text-white/50 text-sm mt-2 leading-relaxed max-w-[90%] font-light">
        {description}
      </p>
    </div>
  </div>
);