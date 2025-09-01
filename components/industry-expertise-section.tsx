import { Card, CardContent } from "@/components/ui/card"

export function IndustryExpertiseSection() {
  const industries = [
    {
      name: "Healthcare & Life Sciences",
      description:
        "AI solutions for medical diagnosis, drug discovery, patient care optimization, and clinical research.",
      applications: [
        "Medical imaging analysis",
        "Drug discovery acceleration",
        "Patient risk prediction",
        "Clinical trial optimization",
      ],
      icon: "🏥",
    },
    {
      name: "Financial Services",
      description: "Advanced AI for risk management, fraud detection, algorithmic trading, and customer experience.",
      applications: [
        "Fraud detection systems",
        "Credit risk assessment",
        "Algorithmic trading",
        "Regulatory compliance",
      ],
      icon: "🏦",
    },
    {
      name: "Manufacturing & Industry 4.0",
      description:
        "Smart manufacturing solutions including predictive maintenance, quality control, and supply chain optimization.",
      applications: [
        "Predictive maintenance",
        "Quality inspection",
        "Supply chain optimization",
        "Production planning",
      ],
      icon: "🏭",
    },
    {
      name: "Retail & E-commerce",
      description: "Personalization engines, inventory optimization, demand forecasting, and customer analytics.",
      applications: ["Recommendation systems", "Inventory optimization", "Price optimization", "Customer segmentation"],
      icon: "🛒",
    },
    {
      name: "Technology & Software",
      description: "AI-powered software solutions, automation tools, and intelligent system optimization.",
      applications: ["Code optimization", "Automated testing", "System monitoring", "User experience enhancement"],
      icon: "💻",
    },
    {
      name: "Energy & Utilities",
      description: "Smart grid optimization, renewable energy forecasting, and infrastructure monitoring solutions.",
      applications: ["Grid optimization", "Energy forecasting", "Asset monitoring", "Demand response"],
      icon: "⚡",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Industry Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep domain knowledge across industries to deliver AI solutions that address sector-specific challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{industry.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary mb-3">Key Applications:</div>
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {app}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
