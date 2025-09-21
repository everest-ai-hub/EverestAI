import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const leaders = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI research director at Google with 15+ years in machine learning and enterprise AI solutions.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Microsoft principal engineer specializing in scalable AI infrastructure and cloud computing platforms.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from MIT, published researcher in neural networks and natural language processing.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "James Thompson",
      role: "VP of Enterprise Solutions",
      bio: "20+ years in enterprise software with deep expertise in digital transformation and client success.",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Leadership Team</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence at Everest AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} className="bg-primary border-primary/20 hover:bg-primary/90 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white/10">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{leader.name}</h3>
                <div className="text-accent text-sm font-medium mb-3">{leader.role}</div>
                <p className="text-white/80 text-sm leading-relaxed">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation and ethical
              technology development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">150+</div>
                <div className="text-white/80 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">25+</div>
                <div className="text-white/80 text-sm">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">15+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
