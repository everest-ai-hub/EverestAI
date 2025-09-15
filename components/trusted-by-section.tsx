export function TrustedBySection() {
  const companies = [
    { name: "Goldman Sachs", logo: "./Nimble.jpg" },
    { name: "McKinsey & Company", logo: "./Nimble.jpg" },
    { name: "Microsoft", logo: "./Nimble.jpg" },
 
  ]

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-slate-50 rounded-full mb-8">
            <span className="text-slate-600 font-medium text-sm tracking-wide uppercase">
              Trusted by Industry Leaders
            </span>
          </div>
          <h2 className="text-3xl font-display font-light text-navy mb-12">
            Partnering with the world's most
            <span className="text-gold font-normal"> innovative enterprises</span>
          </h2>

          <div className="flex  lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-8 rounded-xl hover:bg-slate-50/80 transition-all duration-300 hover:shadow-sm"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-30 md:h-40 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-display font-light text-navy mb-2">500+</div>
              <div className="text-slate-600 font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-navy mb-2">$2.4B+</div>
              <div className="text-slate-600 font-medium">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-light text-navy mb-2">98%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
