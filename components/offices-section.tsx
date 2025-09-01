import { Card, CardContent } from "@/components/ui/card"

export function OfficesSection() {
  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 AI Innovation Drive\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@everestai.com",
      description: "Our headquarters and main development center",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Tech Square\nLondon EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@everestai.com",
      description: "European operations and client services",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Innovation Hub\nSingapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@everestai.com",
      description: "Asia-Pacific headquarters and research lab",
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "321 AI Center Boulevard\nToronto, ON M5V 3A8",
      phone: "+1 (416) 123-4567",
      email: "toronto@everestai.com",
      description: "Canadian operations and talent hub",
    },
  ]

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Global Presence</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            With offices around the world, we provide local expertise and global reach for your AI initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className="bg-primary border-primary/20 hover:bg-primary/90 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                <div className="text-accent text-sm font-medium mb-4">{office.country}</div>

                <div className="space-y-4 text-white/80 text-sm">
                  <div>
                    <div className="font-medium text-white mb-1">Address</div>
                    <div className="whitespace-pre-line">{office.address}</div>
                  </div>

                  <div>
                    <div className="font-medium text-white mb-1">Phone</div>
                    <div>{office.phone}</div>
                  </div>

                  <div>
                    <div className="font-medium text-white mb-1">Email</div>
                    <a href={`mailto:${office.email}`} className="text-accent hover:text-accent/80">
                      {office.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-white/60 text-xs">{office.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Visit Our Offices</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Schedule an in-person meeting at any of our global offices. We'd love to show you our AI labs and discuss
              your project face-to-face.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">4</div>
                <div className="text-white/80 text-sm">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">15+</div>
                <div className="text-white/80 text-sm">Time Zones Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-white/80 text-sm">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
