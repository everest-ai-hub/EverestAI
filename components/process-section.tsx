import { Card, CardContent } from "@/components/ui/card"

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your current state, identify opportunities, and define success metrics for your AI initiative.",
      details: [
        "Business process analysis",
        "Data audit & quality assessment",
        "Technology stack evaluation",
        "Stakeholder interviews",
      ],
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Develop a comprehensive AI strategy aligned with your business objectives and technical capabilities.",
      details: ["AI roadmap development", "Resource planning", "Risk assessment", "Timeline & milestone definition"],
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Create and build custom AI solutions using cutting-edge technologies and best practices.",
      details: [
        "Solution architecture",
        "Model development & training",
        "User interface design",
        "Integration planning",
      ],
    },
    {
      step: "04",
      title: "Testing & Validation",
      description:
        "Rigorous testing to ensure your AI solution meets performance, security, and compliance requirements.",
      details: ["Performance testing", "Security validation", "User acceptance testing", "Compliance verification"],
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "Seamless deployment and integration of AI solutions into your existing systems and workflows.",
      details: ["Production deployment", "System integration", "Data migration", "User training"],
    },
    {
      step: "06",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and continuous improvement to maximize your AI investment.",
      details: ["24/7 monitoring", "Performance optimization", "Feature enhancements", "Scaling support"],
    },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A systematic approach that ensures successful AI implementation from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
