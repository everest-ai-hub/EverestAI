import { Card, CardContent } from "@/components/ui/card"

export function ContactInfoSection() {
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions about our services and capabilities",
      contact: "info@everestai.com",
      icon: "📧",
    },
    {
      title: "Sales & Partnerships",
      description: "Discuss new projects and partnership opportunities",
      contact: "sales@everestai.com",
      icon: "🤝",
    },
    {
      title: "Technical Support",
      description: "Get help with existing projects and technical issues",
      contact: "support@everestai.com",
      icon: "🛠️",
    },
    {
      title: "Media & Press",
      description: "Press inquiries and media relations",
      contact: "press@everestai.com",
      icon: "📰",
    },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Multiple Ways to Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the best way to reach us based on your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{method.description}</p>
                <a href={`mailto:${method.contact}`} className="text-accent hover:text-accent/80 font-medium text-sm">
                  {method.contact}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border-2">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Phone Support</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">US & Canada</div>
                <div className="text-lg font-medium">Number Here</div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="text-muted-foreground">International</div>
                <div className="text-lg font-medium">Number Here</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Monday - Friday</div>
                <div className="font-medium">9:00 AM - 6:00 PM EST</div>
                <div className="mt-4">Emergency Support</div>
                <div className="font-medium">24/7 Available</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Response Times</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>General Inquiries</div>
                <div className="font-medium">Within 24 hours</div>
                <div className="mt-4">Technical Support</div>
                <div className="font-medium">Within 4 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
