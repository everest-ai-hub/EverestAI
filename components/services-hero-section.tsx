import { Button } from "@/components/ui/button"

export function ServicesHeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-accent/3 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/8 rounded-full blur-xl float-animation"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-accent text-xs font-sans font-semibold mb-8 tracking-[0.2em] uppercase fade-in-up">
            COMPREHENSIVE AI SERVICES
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tight fade-in-up-delay-1">
            Transform Your
            <span className="block text-accent font-light italic">Business Vision</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-4xl mx-auto leading-relaxed font-sans font-light fade-in-up-delay-2">
            From strategic consulting to full-scale implementation, we deliver enterprise-grade AI solutions that
            redefine industry standards and accelerate sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up-delay-2">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold px-10 py-4 text-base tracking-wide uppercase premium-hover">
              Explore Our Services
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-4 text-base bg-transparent font-sans font-medium tracking-wide uppercase premium-hover"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 fade-in-up-delay-2">
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                45+
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">
                Enterprise Projects
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                15+
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">
                Global Industries
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                24/7
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">Premium Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
