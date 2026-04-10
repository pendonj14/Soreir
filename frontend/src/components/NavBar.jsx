import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className="absolute top-18 left-20 z-20 flex items-center gap-4 bg-black/70 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/10 text-white shadow-xl">
    {/* Logo Area */}
    <div className="flex items-center gap-4">
      {/* Hamburger Icon Graphic */}
      <div className="w-5 flex flex-col gap-[3px]">
         <div className="w-full h-[2px] bg-white"></div>
         <div className="w-full h-[2px] bg-white"></div>
         <div className="w-full h-[2px] bg-white"></div>
      </div>
      <Link to="/" className="flex items-center">
        <img src="/iconfinal.png" alt="Logo" className="h-10 w-auto" />
        <span className="text-xl tracking-widest font-serif">SOIRÉE</span>
      </Link>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-4 text-xs tracking-[0.15em] uppercase text-white/70">
      <Link to="menu" className="hover:text-white transition-colors">Menu</Link>
      <Link to="about" className="hover:text-white transition-colors">About</Link>
    </div>

    {/* CTA Button */}
    <Link to="reservation" className="hidden md:block text-xs border border-white/30 rounded-lg px-5 py-2.5 uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors duration-300">
      Book a Table
    </Link>
  </nav>
);
