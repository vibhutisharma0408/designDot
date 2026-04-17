export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] lg:min-h-screen overflow-hidden flex items-center pt-16">
      {/* main banner image */}
      <div className="absolute inset-0 top-16 lg:top-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Modern office"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* blue curve */}
      <svg 
        className="absolute inset-0 w-full h-full z-10 hidden sm:block" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path d="M0,0 L28,0 L52,60 C60,82 75,85 100,85 L100,105 L0,105 Z" fill="#0033A0" />
      </svg>
      {/* simpler version for phone */}
      <svg 
        className="absolute inset-0 w-full h-full z-10 sm:hidden" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path d="M0,0 L70,0 L20,100 L0,100 Z" fill="#0033A0" opacity="0.9" />
        <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#0033A0" opacity="0.8" />
      </svg>

      {/* text box */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 flex flex-col justify-center min-h-[calc(100vh-64px)] pb-10">
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-12 md:mt-0">
          <p className="text-white/80 text-[9px] sm:text-[11px] font-bold tracking-widest uppercase mb-4">
            Accountants and Global Business Advisors
          </p>
          
          <div className="inline-block">
            <h1 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-black text-white uppercase leading-[1.05] mb-2 tracking-tight">
              Empowered<br />Workplaces
            </h1>
            <div className="w-full h-1 sm:h-[5px] bg-white mb-6"></div>
          </div>

          <p className="text-white/90 text-[13px] md:text-[14px] font-light leading-relaxed mb-10 max-w-sm md:max-w-[420px]">
            by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
          </p>
          
          <a
            href="#"
            className="relative inline-flex items-center justify-center gap-3 text-black font-black text-[13px] tracking-widest uppercase px-8 py-3.5 transition-transform hover:scale-105 group"
          >
            {/* styled bg */}
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" viewBox="0 0 200 48" preserveAspectRatio="none">
                <path d="M6,0 L180,0 C186,0 188,2 189,6 L198,42 C199,46 197,48 191,48 L6,48 C2,48 0,46 0,42 L0,6 C0,2 2,0 6,0 Z" fill="#FF7F00" />
              </svg>
            </div>

            <span className="relative z-10 flex items-center gap-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-4-4m4 4l-4 4" />
              </svg>
              Lets Connect
            </span>
          </a>
        </div>
      </div>

      {/* bottom labels */}
      <div className="absolute left-0 right-0 bottom-8 md:bottom-12 lg:bottom-16 z-20 pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row md:items-end lg:items-center justify-between gap-6 pointer-events-auto">
          
          <div className="pr-8 md:pr-0 max-w-[80%] md:max-w-none">
            <p className="text-white text-[9px] sm:text-[10.5px] font-bold tracking-widest uppercase">
              Accounting, Taxation, &amp; Business Advisory Between India, Japan, and The World
            </p>
          </div>

          {/* team badge */}
          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#0033A0] overflow-hidden">
                <img src="https://i.pravatar.cc/40?img=1" alt="team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0033A0] overflow-hidden">
                <img src="https://i.pravatar.cc/40?img=2" alt="team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0033A0] overflow-hidden">
                <img src="https://i.pravatar.cc/40?img=3" alt="team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FF7F00] border-2 border-white flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">MORE</span>
              </div>
            </div>
            <div className="text-white">
              <p className="text-[26px] font-black leading-none mb-1 shadow-sm">250 +</p>
              <p className="text-[9px] text-white/90 font-medium leading-tight tracking-wide">Enjoy Working<br />with us</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
