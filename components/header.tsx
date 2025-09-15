"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getCurrentUser, signOut } from "@/lib/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"

export function Header() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await getCurrentUser()
      setUser(user)
      setLoading(false)
    }
    checkUser()
  }, [])
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

          {!loading && (
            <>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={async () => {
                        await signOut()
                        window.location.href = "/login"
                      }}
                    >
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-3 text-sm tracking-wide uppercase premium-hover border border-primary/20">
                    Login
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
