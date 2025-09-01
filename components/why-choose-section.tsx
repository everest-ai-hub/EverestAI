import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gold/10 rounded-full mb-8">
            <span className="text-gold font-medium text-sm tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-gray-900 mb-8 leading-tight">
            Unparalleled
            <span className="block font-normal text-gold">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We combine deep technical expertise with industry knowledge to deliver AI solutions that drive measurable
            business transformation and sustainable competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "End-to-End Expertise",
              description:
                "From strategic consulting and solution architecture to implementation and ongoing optimization, we orchestrate every aspect of your AI transformation journey.",
              gradient: "from-blue-500 to-blue-700",
            },
            {
              title: "Proven Track Record",
              description:
                "Over 500 successful AI implementations across Fortune 500 companies with an average ROI improvement of 340% within the first year.",
              gradient: "from-green-500 to-green-700",
            },
            {
              title: "Cutting-Edge Technology",
              description:
                "We leverage the latest AI frameworks, proprietary algorithms, and cloud-native architectures to build scalable, future-proof solutions.",
              gradient: "from-purple-500 to-purple-700",
            },
            {
              title: "Industry Specialists",
              description:
                "Our multidisciplinary team includes PhD-level researchers, industry veterans, and domain experts who understand your sector's unique challenges.",
              gradient: "from-orange-500 to-orange-700",
            },
            {
              title: "Ethical AI Practices",
              description:
                "We champion responsible AI development with comprehensive governance frameworks, bias mitigation, and transparent decision-making processes.",
              gradient: "from-teal-500 to-teal-700",
            },
            {
              title: "Enterprise Support",
              description:
                "White-glove support with dedicated account management, 24/7 monitoring, and proactive optimization to ensure peak performance.",
              gradient: "from-red-500 to-red-700",
            },
          ].map((item, index) => (
            <Card
            key={index}
            className="group bg-white border-gray-200 hover:bg-gray-50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden rounded-2xl"
          >
            <CardContent className="!p-0 !m-0">
              {/* Top Section */}
              <div className={`w-full h-48 flex items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                <div className="w-16 h-16 border-2 border-white rounded-xl"></div>
              </div>

              {/* Bottom Section */}
              <div className="px-8 py-6 bg-gradient-to-br from-slate-800 to-slate-900">
                <h3 className="text-2xl font-display font-medium text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light mb-0">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
