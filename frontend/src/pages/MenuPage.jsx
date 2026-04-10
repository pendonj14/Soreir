import { Navbar } from '../components/NavBar';
import { MenuItem } from '../components/MenuItem';
import { MenuSectionTitle } from '../components/MenuSectionTitle';
import { useMenu } from '../hooks/useMenu';

export const MenuPage = () => {
  const { menuData, categories, activeCategory, setActiveCategory, loading } = useMenu();

  return (
    <div className="h-screen bg-[#0a0a0a] p-4 font-sans text-white">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-full">

        {/* LEFT HALF: Hero Image */}
        <div className="col-span-2 row-span-4 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/menuside.png')" }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20"></div>
          </div>
          <h1 className="absolute bottom-8 left-8 text-8xl lg:text-9xl font-serif text-[#f4ecd8] tracking-tight">
            MENU
          </h1>
        </div>

        {/* RIGHT HALF: Menu Content */}
        <div className="col-span-2 row-span-4 rounded-3xl bg-white/1 border border-white/10 flex flex-col items-center py-10 px-8 overflow-y-auto">

          {/* Category Pills */}
          <div className="flex items-center gap-2 mb-8 bg-white/5 p-1 rounded-full border border-white/10 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="w-full flex flex-col gap-8 px-25">
            {loading && <p className="text-white/40 text-sm">Loading...</p>}
            {activeCategory && menuData[activeCategory] && (
              <>
                <MenuSectionTitle title={activeCategory} />
                {menuData[activeCategory].map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
              </>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}