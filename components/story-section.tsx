"use client"

import { useEffect, useRef, useState } from "react"

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrollingComplete, setIsScrollingComplete] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const scrollElement = scrollRef.current

    if (!container || !scrollElement) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth
      const viewportHeight = window.innerHeight

      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, viewportHeight - rect.top)
        const visibleHeight = Math.min(containerHeight, visibleTop, rect.bottom)
        const visibilityRatio = visibleHeight / containerHeight

        // Only start horizontal scrolling when section is sufficiently visible
        if (visibilityRatio > 0.1) {
          // Calculate scroll progress with better easing
          const scrollStart = Math.max(0, viewportHeight - rect.top - viewportHeight * 0.2)
          const scrollRange = containerHeight + viewportHeight * 0.6
          const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollRange))

          const targetScrollLeft = scrollProgress * scrollWidth
          scrollElement.scrollLeft = targetScrollLeft

          const isHorizontalComplete = targetScrollLeft >= scrollWidth * 0.95
          setIsScrollingComplete(isHorizontalComplete)

          if (!isHorizontalComplete && rect.top <= 0 && rect.bottom > viewportHeight) {
            // Section is "sticky" until horizontal scroll completes
            const scrollDelta = window.pageYOffset - (container.offsetTop - viewportHeight * 0.2)
            if (scrollDelta > 0 && scrollDelta < scrollRange) {
              // Prevent further vertical scrolling by maintaining position
              window.scrollTo(0, container.offsetTop - viewportHeight * 0.2 + scrollDelta * 0.1)
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: false })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a small team of AI researchers to a global leader in enterprise AI solutions
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-4"
          style={{
            paddingRight: "calc(50vw - 160px)", // Half viewport minus half card width (320px/2)
          }}
        >
          {[
            {
              year: "2018",
              title: "The Beginning",
              description:
                "Founded by a team of AI researchers from leading universities with a vision to make AI accessible to enterprises.",
            },
            {
              year: "2019",
              title: "First Enterprise Client",
              description:
                "Delivered our first major AI transformation project for a Fortune 500 manufacturing company, achieving 40% efficiency gains.",
            },
            {
              year: "2020",
              title: "Global Expansion",
              description:
                "Opened offices in three continents and expanded our team to include industry specialists across multiple sectors.",
            },
            {
              year: "2021",
              title: "AI Ethics Initiative",
              description:
                "Launched our comprehensive AI ethics framework, setting new standards for responsible AI development in the industry.",
            },
            {
              year: "2022",
              title: "Platform Launch",
              description:
                "Released our proprietary AI development platform, enabling faster deployment and better scalability for enterprise clients.",
            },
            {
              year: "2023",
              title: "Industry Recognition",
              description:
                "Named as a leader in enterprise AI solutions by major industry analysts and won multiple innovation awards.",
            },
          ].map((milestone, index) => (
            <div key={index} className="flex-shrink-0 w-80">
              <div className="bg-white p-8 rounded-xl shadow-sm border h-full relative">
                {index < 5 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                )}

                <div className="text-3xl font-bold text-accent mb-4">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isScrollingComplete ? "bg-green-500" : "bg-accent animate-pulse"
              }`}
            ></div>
            {isScrollingComplete ? "Journey complete!" : "Scroll to explore our journey"}
          </div>
        </div>
      </div>
    </section>
  )
}
