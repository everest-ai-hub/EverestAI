import { Card, CardContent } from "@/components/ui/card"

export function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies.",
      icon: "💡",
    },
    {
      title: "Ethics",
      description:
        "We prioritize responsible AI development with transparency, fairness, and respect for privacy and human rights.",
      icon: "⚖️",
    },
    {
      title: "Excellence",
      description:
        "We deliver exceptional quality in every project, exceeding client expectations through meticulous attention to detail.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of partnership, working closely with clients to understand and solve their unique challenges.",
      icon: "🤝",
    },
    {
      title: "Impact",
      description: "We measure success by the positive transformation we create for our clients and their communities.",
      icon: "🎯",
    },
    {
      title: "Learning",
      description:
        "We foster a culture of continuous learning, staying at the forefront of AI research and industry trends.",
      icon: "📚",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do and shape how we approach AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
