"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "The AI implementation transformed our entire workflow. We've seen a 300% increase in efficiency and our team can now focus on strategic initiatives rather than repetitive tasks.",
    author: "Name Here",
    position: "CTO",
    company: "saas company",
    rating: 5,
    avatar: "/placeholder-590kf.png",
  },
  {
    id: 2,
    quote:
      "Their AI agents have revolutionized our customer service. Response times decreased by 80% while customer satisfaction scores reached an all-time high of 98%.",
    author: "Name Here",
    position: "Head of Operations",
    company: "saas company",
    rating: 5,
    avatar: "/placeholder-590kf.png",
  },
  {
    id: 3,
    quote:
      "The predictive analytics capabilities have been game-changing for our supply chain. We've reduced costs by 25% while improving delivery accuracy to 99.2%.",
    author: "Name Here",
    position: "VP of Supply Chain",
    company: "saas company",
    rating: 5,
    avatar: "/placeholder-590kf.png",
  },
  {
    id: 4,
    quote:
      "The AI-powered risk assessment tools have enhanced our decision-making process significantly. We've minimized portfolio risk by 40% while maintaining strong returns.",
    author: "James Lee",
    position: "Chief Risk Officer",
    company: "saas company",
    rating: 5,
    avatar: "/placeholder-590kf.png",
  },
  {
    id: 5,
    quote:
      "Their healthcare AI solutions have improved patient outcomes dramatically. Diagnostic accuracy increased by 35% and treatment planning time reduced by 60%.",
    author: "name Here",
    position: "Medical Director",
    company: "saas company",
    rating: 5,
    avatar: "/placeholder-590kf.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-gold font-medium text-sm tracking-wide uppercase">Client Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-light text-slate-900 mb-8 leading-tight">
            Transforming Businesses
            <span className="block font-normal text-gold">with Intelligence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how leading organizations have achieved remarkable results with our AI solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-12 md:p-16 lg:p-20 relative">
            <div className="text-center max-w-5xl mx-auto">
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl lg:text-2xl text-slate-100 leading-relaxed mb-12 font-light px-8 md:px-16">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <h4 className="text-lg font-serif font-semibold text-white mb-2">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm text-slate-300 mb-2">{testimonials[currentIndex].position}</p>
                <p className="text-sm text-secondary font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-8 md:left-12 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-colors duration-200"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-8 md:right-12 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-colors duration-200"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary scale-125" : "bg-slate-500 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
