export default function Insights() {
  return (
    <section className="bg-white py-12 lg:py-24 px-4 md:px-8 lg:px-16 w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-14">

        {/* label */}
        <div className="shrink-0 flex items-center">
          <div className="bg-[#F0F2F5] rounded-[24px] w-[200px] h-[190px] flex flex-col justify-center p-8">
            <p className="text-[#1a1a1a] font-bold text-[15px] leading-[1.4] uppercase tracking-wide">
              Inspiration &amp;<br />Insights
            </p>
          </div>
        </div>

        {/* text items */}
        <div className="flex-1 max-w-[420px] flex flex-col justify-center gap-5">

          {/* first item */}
          <div className="pb-4 border-b-[2px] border-[#0033A0]">
            <h3 className="text-[#0033A0] font-bold text-[12.5px] mb-1.5">
              Pre-market Entry
            </h3>
            <p className="text-[#0033A0] text-[10.5px] leading-[1.6] font-medium pr-4">
              Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.
            </p>
          </div>

          <div className="pb-4 border-b border-gray-300">
            <h3 className="text-black font-bold text-[12.5px] mb-1.5">
              Market Entry
            </h3>
            <p className="text-gray-600 text-[10.5px] leading-[1.6] font-medium pr-4">
              Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.
            </p>
          </div>

          <div className="pb-4 border-b border-gray-300">
            <h3 className="text-black font-bold text-[12.5px] mb-1.5">
              Operations
            </h3>
            <p className="text-gray-600 text-[10.5px] leading-[1.6] font-medium pr-4">
              Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.
            </p>
          </div>

          <div className="pb-4 border-b border-gray-300">
            <h3 className="text-black font-bold text-[12.5px] mb-1.5">
              Growth &amp; Expansion
            </h3>
            <p className="text-gray-600 text-[10.5px] leading-[1.6] font-medium pr-4">
              Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.
            </p>
          </div>

        </div>

        {/* image accordion */}
        <div className="shrink-0 flex items-stretch gap-4 h-[280px] lg:h-[320px] ml-auto">
          
          {/* main card */}
          <div className="relative w-[180px] lg:w-[220px] rounded-[24px] overflow-hidden shadow-md shrink-0">
            <img
              src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=600&q=80"
              alt="Pre-market insights"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-5 right-5 text-white">
              <p className="font-bold text-[13px] mb-1">Pre-Market</p>
              <p className="text-[9px] text-white/90 leading-[1.4] font-medium">
                Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
              </p>
            </div>
          </div>

          {/* side card 1 */}
          <div className="relative w-[50px] lg:w-[60px] rounded-[24px] overflow-hidden shadow-sm flex items-end justify-center pb-8 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1665686374006-b8f04c132bb8?w=300&q=80" 
              alt="Operations" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="relative z-10 text-white font-bold text-[11px] whitespace-nowrap transform -rotate-90 origin-bottom mb-14">
              Operations
            </p>
          </div>

          {/* side card 2 */}
          <div className="relative w-[50px] lg:w-[60px] rounded-[24px] overflow-hidden shadow-sm flex items-end justify-center pb-8 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&q=80" 
              alt="Growth & Expansion" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="relative z-10 text-white font-bold text-[11px] whitespace-nowrap transform -rotate-90 origin-bottom mb-24">
              Growth &amp; Expansion
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
