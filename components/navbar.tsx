"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#about" },
  { name: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Sun className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className={cn("font-bold text-lg transition-colors", isScrolled ? "text-foreground" : "text-white")}>
              Bravemind Enterprise
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isScrolled ? "text-foreground" : "text-white/90",
                )}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#products">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("md:hidden p-2 rounded-lg transition-colors", isScrolled ? "text-foreground" : "text-white")}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
          style={{ background: isOpen ? "rgba(20, 20, 20, 0.98)" : "transparent", backdropFilter: isOpen ? "blur(8px)" : "none" }}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
                )}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="mx-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#products" onClick={() => setIsOpen(false)}>
                Get Free Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
