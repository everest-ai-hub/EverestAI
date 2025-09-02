import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-serif font-black text-primary hover:text-primary/80 transition-all duration-300 tracking-tight"
            >
              EVEREST<span className="text-accent font-light">AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-sans font-medium text-foreground hover:text-accent transition-all duration-300 tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-sans font-medium text-foreground hover:text-accent transition-all duration-300 tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-sans font-medium text-foreground hover:text-accent transition-all duration-300 tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-sans font-medium text-foreground hover:text-accent transition-all duration-300 tracking-wide uppercase"
            >
              Contact
            </Link>
          </nav>

          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-3 text-sm tracking-wide uppercase premium-hover border border-primary/20">
              
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
