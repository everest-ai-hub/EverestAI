import { Card, CardContent } from "@/components/ui/card"

export function AIProductsSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Products</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Develop, launch, and oversee cutting-edge Enterprise AI applications powered by{" "}
            <span className="text-accent">GenAI Engines</span> and{" "}
            <span className="text-accent">Predictive AI Engines</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-primary border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">AI Studio</h3>
                <p className="text-white/80 mb-6">
                  One platform for all AI development needs. Build, deploy, and manage your AI applications with
                  enterprise-grade security and scalability.
                </p>
                <div className="text-accent text-sm font-semibold">Learn More →</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
