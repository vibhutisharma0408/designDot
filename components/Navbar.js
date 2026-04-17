export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* logo */}
        <div className="flex items-center shrink-0">
          <svg width="60" height="66" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[52px] h-[57px] text-[#1a1a1a]">
            {/* base shape */}
            <path d="M30 2 L56 17 L56 49 L30 64 L4 49 L4 17 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
            {/* upper arrow */}
            <path d="M16 23 L30 14 L44 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* text */}
            <text x="30" y="38" fontSize="13" fontWeight="900" textAnchor="middle" fill="currentColor" style={{ fontFamily: "sans-serif", letterSpacing: "1px" }}>DEMO</text>
            {/* lower arrow */}
            <path d="M16 43 L30 52 L44 43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 ml-auto mr-8 lg:mr-12">
          <a href="#" className="text-[13px] font-bold text-gray-700 tracking-wide hover:text-brand-orange transition-colors">
            WHO WE SERVE
          </a>
          <a href="#" className="text-[13px] font-bold text-gray-700 tracking-wide hover:text-brand-orange transition-colors">
            SOLUTIONS
          </a>
          <a href="#" className="text-[13px] font-bold text-gray-700 tracking-wide hover:text-brand-orange transition-colors">
            RESOURCES
          </a>
          <a href="#" className="text-[13px] font-bold text-gray-700 tracking-wide hover:text-brand-orange transition-colors">
            ABOUT US
          </a>
          <a href="#" className="text-[13px] font-bold text-gray-700 tracking-wide hover:text-brand-orange transition-colors">
            CONTACT US
          </a>
        </nav>

        {/* actions */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* search */}
          <button className="text-gray-700 hover:text-brand-orange transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-700 cursor-pointer hover:text-brand-orange transition-colors">
            IND
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L10 0 L5 6 Z" />
            </svg>
          </div>
          
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-700 cursor-pointer hover:text-brand-orange transition-colors">
            ENGLISH
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L10 0 L5 6 Z" />
            </svg>
          </div>
        </div>

        {/* mobile menu */}
        <button className="md:hidden text-[#1a1a1a]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
