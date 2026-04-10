export const ReservationPage = () => {
  return (
    <div className="flex h-screen w-full gap-4 bg-[#070707] p-4 font-sans text-[#e8e6e3]">
      
      {/* Left Bento Box: Image & Title */}
      <div className="group relative flex w-1/2 items-end overflow-hidden rounded-2xl border border-white/5 bg-[#111] shadow-lg">
        <img
          src="https://framerusercontent.com/images/apLVZGAMneXESKaZkziIssg86a8.webp?scale-down-to=2048&width=2000&height=2400"
          alt="Wine glasses on a table"
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <h1 className="relative z-10 p-12 font-serif text-7xl leading-[1.1] tracking-widest text-[#e8e4dc]">
          BOOK <br /> A TABLE
        </h1>
      </div>

      {/* Right Bento Box: Reservation Form */}
      <div className="flex w-1/2 flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0c0c0c] p-12 shadow-lg">
        
        {/* Header Section */}
        <div className="mb-4 flex items-center gap-4">
          <div className="h-[1px] w-4 bg-[#d8d3c5]/30"></div>
          <h2 className="font-serif text-2xl tracking-[0.2em] text-[#d8d3c5]">RESERVATION</h2>
          <div className="h-[1px] w-4 bg-[#d8d3c5]/30"></div>
        </div>
        <p className="mb-16 max-w-md text-center text-sm leading-relaxed text-gray-400">
          Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
        </p>

        {/* Form Section */}
        <form className="grid w-full max-w-lg grid-cols-2 gap-6">
          
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-300 placeholder-gray-600 transition-colors focus:border-white/30 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">Email</label>
            <input
              type="email"
              placeholder="example@framer.com"
              className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-300 placeholder-gray-600 transition-colors focus:border-white/30 focus:outline-none"
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">Phone Number</label>
            <input
              type="tel"
              placeholder="+420 123 456 789"
              className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-300 placeholder-gray-600 transition-colors focus:border-white/30 focus:outline-none"
            />
          </div>

          {/* People Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">People</label>
            <select className="appearance-none rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-600 transition-colors focus:border-white/30 focus:outline-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
          </div>

          {/* Date Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">Date</label>
            <input
              type="date"
              className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-600 transition-colors focus:border-white/30 focus:outline-none [color-scheme:dark]"
            />
          </div>

          {/* Time Input */}
          <div className="flex flex-col gap-2">
            <label className="font-serif text-[10px] uppercase tracking-widest text-[#d8d3c5]">Time</label>
            <input
              type="time"
              className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-sm text-gray-600 transition-colors focus:border-white/30 focus:outline-none [color-scheme:dark]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="col-span-2 mt-4 rounded-lg border border-white/10 bg-[#151515] py-4 font-serif text-[10px] uppercase tracking-[0.2em] text-[#d8d3c5] transition-colors hover:bg-[#222]"
          >
            Fill out the form
          </button>
          
        </form>
      </div>

    </div>
  );
};