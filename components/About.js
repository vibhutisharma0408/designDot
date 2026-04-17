export default function About() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-14">

        {/* ABOUT FIRM label card */}
        <div className="shrink-0 pt-2 lg:pt-[72px]">
          <div className="bg-[#F0F2F5] rounded-[20px] w-36 lg:w-44 h-40 flex flex-col justify-center p-6 lg:p-8">
            <p className="text-black font-black text-[15px] leading-[1.3] uppercase tracking-wide">
              About<br />Firm
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Top Row: Title and Pill */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-4">
            <h2 className="text-[20px] md:text-[24px] font-medium text-gray-800 tracking-tight pt-16 lg:pt-0">HLS Global Group</h2>
            
            {/* Location pill */}
            <div className="flex items-center bg-[#FF7F00] rounded-full px-1 shrink-0">
              <span className="text-black text-[9.5px] font-bold tracking-widest uppercase px-5 py-[9px] border-r border-[#E06E00]">
                We Are Located
              </span>
              <span className="text-black text-[9.5px] font-black tracking-widest uppercase px-4 py-[9px] flex items-center gap-2 cursor-pointer">
                India
                <svg width="8" height="5" viewBox="0 0 10 6" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L10 0 L5 6 Z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Lower Row: Paragraph/Stats + Image */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            
            {/* Left Col: Paragraph + Stats map */}
            <div className="flex-1 relative z-10">
              {/* Background Map Watermark Fixed */}
              <div className="absolute top-[-50px] left-[-220px] w-[900px] h-[120%] opacity-15 pointer-events-none hidden md:block z-[-1]">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                  alt="World Map Watermark"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-gray-700 text-[11.5px] leading-[1.8] mb-12 font-medium max-w-lg text-justify md:text-left relative z-10">
                is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
              </p>

              {/* Stats - using two rows and horizontal exact blue line */}
              <div className="flex flex-col max-w-sm">
                
                {/* Top stats row + blue border */}
                <div className="grid grid-cols-2 gap-10 border-b-[2.5px] border-[#0033A0] pb-6 mb-8 w-[95%]">
                  <div>
                    <p className="text-[25px] font-black text-black leading-none mb-3">250+</p>
                    <p className="text-[9.5px] text-gray-500 leading-snug font-medium">Professional Staff<br />Members Globally</p>
                  </div>
                  <div>
                    <p className="text-[25px] font-black text-black leading-none mb-3">1000+</p>
                    <p className="text-[9.5px] text-gray-500 leading-snug font-medium">Clients in the HLS<br />Global Network</p>
                  </div>
                </div>

                {/* Bottom stats row */}
                <div className="grid grid-cols-2 gap-10 w-[95%]">
                  <div>
                    <p className="text-[25px] font-black text-black leading-none mb-3">35+</p>
                    <p className="text-[9.5px] text-gray-500 leading-snug font-medium">Years of Experience<br />Connecting Japan<br />and the World</p>
                  </div>
                  <div>
                    <p className="text-[25px] font-black text-black leading-none mb-3">15+</p>
                    <p className="text-[9.5px] text-gray-500 leading-snug font-medium">Countries Covered<br />With Our Alliance<br />Network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Building image */}
            <div className="w-full lg:w-[440px] xl:w-[500px] shrink-0 mt-8 lg:mt-0">
              <div className="rounded-[20px] overflow-hidden h-[350px] lg:h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="HLS Global Group building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
