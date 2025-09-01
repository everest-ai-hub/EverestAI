"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Play, ArrowRight } from "lucide-react"

export function AISolutionsSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const solutions = [
    {
      title: "Intelligent Process Automation",
      description:
        "Streamline operations with AI-powered automation that learns and adapts to your business processes.",
      features: ["Document Processing", "Workflow Optimization", "Quality Assurance", "Compliance Monitoring"],
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Make data-driven decisions with advanced predictive models that anticipate market trends and customer behavior.",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Analytics", "Market Intelligence"],
    },
    {
      title: "Natural Language Processing",
      description: "Transform unstructured text data into actionable insights with state-of-the-art NLP solutions.",
      features: ["Sentiment Analysis", "Content Generation", "Language Translation", "Chatbot Development"],
    },
    {
      title: "Computer Vision Solutions",
      description: "Extract valuable insights from visual data with advanced image and video analysis capabilities.",
      features: ["Object Detection", "Quality Inspection", "Facial Recognition", "Medical Imaging"],
    },
    {
      title: "Recommendation Systems",
      description: "Boost engagement and sales with personalized recommendation engines tailored to your customers.",
      features: ["Product Recommendations", "Content Personalization", "User Behavior Analysis", "A/B Testing"],
    },
    {
      title: "AI-Powered Security",
      description:
        "Protect your business with intelligent security solutions that detect and prevent threats in real-time.",
      features: ["Fraud Detection", "Anomaly Detection", "Cybersecurity", "Access Control"],
    },
  ]

  const industries = [
    {
      name: "Healthcare",
      title: "Healthcare",
      description:
        "AI solutions for medical diagnosis, drug discovery, patient care optimization, and clinical research. Advanced medical imaging analysis and predictive healthcare analytics.",
      mockupTitle: "Patient diagnosis by AI",
      mockupContent: {
        issue: "Complex medical case requires analysis.",
        actions: [
          "Analyzed medical imaging and patient history.",
          "Cross-referenced symptoms with medical database.",
          "Generated differential diagnosis recommendations.",
          "Provided treatment plan suggestions for review.",
        ],
      },
    },
    {
      name: "Finance",
      title: "Finance",
      description:
        "Advanced AI for risk management, fraud detection, algorithmic trading, and customer experience. Real-time financial analytics and automated compliance monitoring.",
      mockupTitle: "Fraud detected by AI",
      mockupContent: {
        issue: "Suspicious transaction pattern identified.",
        actions: [
          "Analyzed transaction history and patterns.",
          "Applied machine learning fraud detection models.",
          "Flagged high-risk transactions automatically.",
          "Generated detailed risk assessment report.",
        ],
      },
    },
    {
      name: "Retail",
      title: "Retail",
      description:
        "Personalization engines, inventory optimization, demand forecasting, and customer analytics. AI-powered recommendation systems and supply chain optimization.",
      mockupTitle: "Sales optimized by AI",
      mockupContent: {
        issue: "Inventory levels need optimization.",
        actions: [
          "Analyzed sales trends and seasonal patterns.",
          "Predicted demand for upcoming periods.",
          "Optimized inventory allocation across locations.",
          "Implemented dynamic pricing recommendations.",
        ],
      },
    },
    {
      name: "Manufacturing",
      title: "Manufacturing",
      description:
        "Smart manufacturing solutions including predictive maintenance, quality control, and supply chain optimization. Industry 4.0 implementations with IoT integration.",
      mockupTitle: "Maintenance scheduled by AI",
      mockupContent: {
        issue: "Equipment showing early wear indicators.",
        actions: [
          "Monitored sensor data and performance metrics.",
          "Applied predictive maintenance algorithms.",
          "Scheduled optimal maintenance windows.",
          "Prevented costly unplanned downtime.",
        ],
      },
    },
  ]

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-gold font-medium text-sm tracking-wide uppercase">Solutions Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-navy mb-8 leading-tight">
            Transformative AI
            <span className="block font-normal text-gold">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive AI solutions engineered to address complex challenges and unlock unprecedented opportunities
            across industries and business functions.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold group-hover:to-gold/80 transition-all duration-300">
                  <div className="w-8 h-8 border-2 border-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-display font-medium text-slate-800 mb-6 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className="w-6 h-px bg-gradient-to-r from-gold to-gold/50 mr-4"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-navy/20 text-navy hover:bg-navy hover:text-white transition-all duration-300 font-medium bg-transparent"
                >
                  Explore Solution
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-gold font-medium text-sm tracking-wide uppercase">Industry Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-navy mb-8 leading-tight">
            Industry-Specific
            <span className="block font-normal text-gold">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Precision-engineered AI implementations designed for the unique requirements and regulatory landscapes of
            your industry
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden">
          {/* Industry Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-6 bg-slate-800/50">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === index
                    ? "bg-white text-slate-800 shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Industry Content */}
          <div className="p-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="text-white">
                <h3 className="text-6xl font-display font-light mb-8 text-white">{industries[activeIndustry].title}</h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-12 font-light">
                  {industries[activeIndustry].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo (2:01)
                  </Button>
                  <Button
                    variant="link"
                    className="text-white hover:text-emerald-400 p-0 font-medium flex items-center gap-2"
                  >
                    Explore {industries[activeIndustry].title} Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Right Side - Mockup Interface */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  {/* Mockup Header */}
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-lg mb-6 flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium">{industries[activeIndustry].mockupTitle}</span>
                  </div>

                  {/* Issue Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-yellow-600 rounded-sm"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Issue</h4>
                        <p className="text-sm text-slate-600">{industries[activeIndustry].mockupContent.issue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="mb-6">
                    <div className="bg-slate-100 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        Actions taken
                        <div className="w-4 h-4 text-slate-400">▼</div>
                      </h4>
                      <ul className="space-y-2">
                        {industries[activeIndustry].mockupContent.actions.map((action, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-slate-100 rounded hover:bg-slate-200 transition-colors">👍</button>
                      <button className="w-8 h-8 bg-slate-100 rounded hover:bg-slate-200 transition-colors">👎</button>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-slate-100 rounded hover:bg-slate-200 transition-colors flex items-center justify-center">
                        <div className="w-4 h-4 border border-slate-400 rounded-sm"></div>
                      </button>
                      <button className="w-8 h-8 bg-slate-100 rounded hover:bg-slate-200 transition-colors">🔄</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
