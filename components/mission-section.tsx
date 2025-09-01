import { Card, CardContent } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-900 text-sm font-medium mb-6">
              OUR PURPOSE
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy-900 mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">Mission</span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              To democratize artificial intelligence by making advanced AI solutions accessible, understandable, and
              actionable for enterprises of all sizes. We believe that AI should empower human potential, not replace
              it.
            </p>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
              Through innovative technology, ethical practices, and deep industry expertise, we help organizations
              harness the transformative power of AI to solve complex challenges, drive growth, and create sustainable
              competitive advantages.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  2018
                </div>
                <div className="text-slate-500 font-medium">Founded</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-slate-500 font-medium">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-navy-900/5 to-slate-100/50 backdrop-blur-sm border-2 border-navy-900/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/20 to-accent/20 rounded-bl-full"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-serif font-bold text-navy-900 mb-6">Our Vision</h3>
                  <p className="text-slate-700 leading-relaxed mb-8 text-lg font-light">
                    A world where artificial intelligence amplifies human creativity, accelerates innovation, and
                    creates opportunities for sustainable growth across all industries.
                  </p>

                  <div className="bg-gradient-to-r from-gold/10 to-accent/10 p-6 rounded-xl border border-gold/20">
                    <p className="text-navy-900 font-medium italic text-lg leading-relaxed">
                      "AI is not about replacing human intelligence—it's about augmenting it to achieve what was
                      previously impossible."
                    </p>
                    <div className="text-slate-600 mt-4 font-medium">— Everest AI Leadership Team</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
