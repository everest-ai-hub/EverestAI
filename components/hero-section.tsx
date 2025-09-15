import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/Vid.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated gradients */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-[2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-accent text-xs font-sans font-semibold mb-8 tracking-[0.2em] uppercase fade-in-up">
            Premium Enterprise AI Transformation
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tight fade-in-up-delay-1">
            Exceptional AI Solutions for
            <span className="block text-accent font-light italic">Visionary Enterprises</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-4xl mx-auto leading-relaxed font-sans font-light fade-in-up-delay-2">
            We craft bespoke artificial intelligence solutions that elevate your enterprise to unprecedented levels of
            operational excellence, strategic insight, and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up-delay-2">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold px-10 py-4 text-base tracking-wide uppercase premium-hover">
              Begin Transformation
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-4 text-base bg-transparent font-sans font-medium tracking-wide uppercase premium-hover"
            >
              Explore Solutions
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 fade-in-up-delay-2">
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                500+
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">
                AI Implementations
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                98%
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-serif font-black text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                $2.5B+
              </div>
              <div className="text-white/70 font-sans font-light text-sm tracking-wide uppercase">Value Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
