export default function HotTopics() {
  return (
    <section className="bg-white py-12 w-full pt-16">
      {/* Top light blue rule */}
      <div className="w-full border-t border-blue-200/60 w-full mb-12"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
        
        {/* Label */}
        <div className="shrink-0 lg:w-[190px]">
          <div className="relative inline-flex items-center justify-center bg-transparent w-[160px] h-[46px]">
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" viewBox="0 0 160 46" preserveAspectRatio="none">
                <path d="M5,0 L142,0 C146,0 148,1.5 149,4 L159,40 C160,43 158,46 154,46 L5,46 C2.5,46 0,43.5 0,40 L0,5 C0,2.5 2.5,0 5,0 Z" fill="#FF7F00" />
              </svg>
            </div>
            <span className="relative z-10 text-[#1a1a1a] font-bold text-[11px] tracking-wide uppercase mr-4">
              HOT TOPICS
            </span>
          </div>
        </div>

        {/* Topics grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-12 gap-y-12">
          {[
            "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
            "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
            "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
            "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
          ].map((text, i) => (
            <div key={i} className="flex flex-col group cursor-pointer border-t-[2.5px] border-[#0033A0] pt-4 min-h-[100px] hover:-translate-y-1 transition-transform">
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium mb-6 pr-2">
                {text}
              </p>
              <div className="mt-auto flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px] text-[#1a1a1a] group-hover:text-[#FF7F00] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
