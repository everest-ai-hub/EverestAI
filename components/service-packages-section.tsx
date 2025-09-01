import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicePackagesSection() {
  const packages = [
    {
      name: "AI Starter",
      description: "Perfect for small to medium businesses looking to explore AI opportunities",
      price: "Starting at $25K",
      duration: "2-3 months",
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Proof of concept development",
        "Basic training & documentation",
        "3 months support",
      ],
      popular: false,
    },
    {
      name: "AI Accelerator",
      description: "Comprehensive AI implementation for growing enterprises",
      price: "Starting at $75K",
      duration: "4-6 months",
      features: [
        "Full AI strategy & planning",
        "Custom solution development",
        "System integration",
        "Advanced training programs",
        "12 months support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "AI Enterprise",
      description: "End-to-end AI transformation for large organizations",
      price: "Custom Pricing",
      duration: "6-12 months",
      features: [
        "Enterprise-wide AI strategy",
        "Multiple solution development",
        "Advanced integration & deployment",
        "Comprehensive training & change management",
        "24/7 support & monitoring",
        "Continuous optimization",
        "Dedicated success manager",
      ],
      popular: false,
    },
  ]

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Service Packages</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Flexible service packages designed to meet the needs of organizations at every stage of their AI journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.popular ? "border-accent border-2" : "border-primary/20"} bg-primary`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{pkg.description}</p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-accent mb-1">{pkg.price}</div>
                  <div className="text-white/60 text-sm">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/90">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Every organization is unique. Let's discuss your specific requirements and create a tailored AI solution
              that fits your needs and budget.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
