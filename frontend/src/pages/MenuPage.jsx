import { useRef } from 'react';
import { MenuItem } from '../components/MenuItem';
import { MenuSectionTitle } from '../components/MenuSectionTitle';
import { useMenu } from '../hooks/useMenu';

export const MenuPage = () => {
  const { menuData, categories, loading } = useMenu();
  const sectionRefs = useRef({});
  const scrollContainerRef = useRef(null);

  const scrollToCategory = (cat) => {
    const container = scrollContainerRef.current;
    const section = sectionRefs.current[cat];
    if (!container || !section) return;
    const offset = section.offsetTop - container.offsetTop;
    container.scrollTo({ top: offset, behavior: 'smooth' });
  };

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
        <div
          ref={scrollContainerRef}
          className="col-span-2 row-span-4 rounded-3xl bg-white/1 border border-white/10 flex flex-col items-center py-10 px-8 overflow-y-auto"
        >

          {/* Category Buttons */}
          <div className="flex items-center gap-3 mb-8 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className="px-6 py-2 rounded-lg text-xs tracking-widest uppercase border border-white/30 bg-transparent text-white hover:border-white transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* All categories and their items */}
          <div className="w-full flex flex-col gap-12 px-25">
            {loading && <p className="text-white/40 text-sm">Loading...</p>}
            {categories.map((cat) => (
              <div
                key={cat}
                data-category={cat}
                ref={(el) => (sectionRefs.current[cat] = el)}
                className="flex flex-col gap-8"
              >
                <MenuSectionTitle title={cat} />
                {menuData[cat]?.map((item) => (
                  <MenuItem key={item._id} {...item} />
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
