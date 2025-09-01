import { Button } from "@/components/ui/button"

export function ServiceCategoriesSection() {
  const services = [
    {
      category: "AI Strategy & Consulting",
      description: "Strategic guidance to identify AI opportunities and develop comprehensive implementation roadmaps.",
      services: [
        "AI Readiness Assessment",
        "Strategic Planning & Roadmapping",
        "ROI Analysis & Business Case Development",
        "Technology Stack Evaluation",
        "Change Management Consulting",
      ],
      number: "01",
    },
    {
      category: "Custom AI Development",
      description: "Tailored AI solutions built from the ground up to address your specific business challenges.",
      services: [
        "Machine Learning Model Development",
        "Natural Language Processing Solutions",
        "Computer Vision Applications",
        "Predictive Analytics Systems",
        "AI-Powered Automation Tools",
      ],
      number: "02",
    },
    {
      category: "AI Integration & Implementation",
      description: "Seamless integration of AI solutions into your existing systems and workflows.",
      services: [
        "System Integration & API Development",
        "Cloud Migration & Deployment",
        "Legacy System Modernization",
        "Data Pipeline Architecture",
        "Performance Optimization",
      ],
      number: "03",
    },
    {
      category: "Data Science & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      services: [
        "Data Strategy & Governance",
        "Advanced Analytics & Reporting",
        "Real-time Dashboard Development",
        "Statistical Modeling",
        "Business Intelligence Solutions",
      ],
      number: "04",
    },
    {
      category: "AI Training & Support",
      description: "Comprehensive training programs and ongoing support to maximize your AI investment.",
      services: [
        "Team Training & Workshops",
        "Technical Documentation",
        "24/7 Technical Support",
        "System Monitoring & Maintenance",
        "Continuous Improvement Programs",
      ],
      number: "05",
    },
    {
      category: "AI Ethics & Compliance",
      description: "Ensure responsible AI deployment with comprehensive ethics and compliance frameworks.",
      services: [
        "AI Ethics Framework Development",
        "Bias Detection & Mitigation",
        "Regulatory Compliance Assessment",
        "Privacy & Security Audits",
        "Responsible AI Governance",
      ],
      number: "06",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="text-accent text-xs font-sans font-semibold mb-8 tracking-[0.2em] uppercase">
            OUR EXPERTISE
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-navy-900 mb-8 leading-tight">
            Comprehensive AI
            <span className="block text-accent font-light italic">Service Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-sans font-light">
            Enterprise-grade AI services designed to support every stage of your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-serif font-black text-xl shadow-lg">
                    {service.number}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent"></div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.category}
                </h3>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans font-light">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-2 border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 font-sans font-semibold px-8 py-3 tracking-wide uppercase bg-transparent w-full lg:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
