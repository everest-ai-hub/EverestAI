"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-900 text-sm font-medium mb-6">
              START YOUR JOURNEY
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy-900 mb-8 leading-tight">
              Let's Start the
              <span className="block bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
              Fill out the form and our AI experts will get back to you within 24 hours. We'll discuss your specific
              needs and how we can help you achieve your AI goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Free Consultation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Get expert advice on your AI strategy with no commitment required.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Custom Solutions</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tailored AI solutions designed specifically for your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold to-accent rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Proven Results</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Join 500+ companies that have successfully transformed with our AI solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm border-2 border-navy-900/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardContent className="p-10 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/20 to-accent/20 rounded-bl-full"></div>

              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Company *</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Industry</label>
                      <Select onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Financial Services</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="energy">Energy & Utilities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Project Type</label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">AI Strategy & Consulting</SelectItem>
                          <SelectItem value="development">Custom AI Development</SelectItem>
                          <SelectItem value="integration">AI Integration</SelectItem>
                          <SelectItem value="analytics">Data Science & Analytics</SelectItem>
                          <SelectItem value="training">Training & Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Project Budget</label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25K</SelectItem>
                        <SelectItem value="25k-75k">$25K - $75K</SelectItem>
                        <SelectItem value="75k-200k">$75K - $200K</SelectItem>
                        <SelectItem value="200k-500k">$200K - $500K</SelectItem>
                        <SelectItem value="over-500k">Over $500K</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Project Details *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                      className="w-full h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-accent hover:from-accent hover:to-gold text-navy-900 font-semibold py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-slate-500 text-center font-light">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
