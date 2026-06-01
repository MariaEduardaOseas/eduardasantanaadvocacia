"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="#inicio" className="group">
            <div className="flex flex-col">
              <span className="font-serif text-xl lg:text-4xl font-medium tracking-wide text-foreground group-hover:text-primary transition-colors uppercase">
                Eduarda Santana
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.4em] uppercase text-muted-foreground font-light">
                Advocacia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#contato"
            className="hidden lg:inline-flex items-center px-6 py-3 border border-primary text-primary text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Agendar Consulta
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block mt-4 px-6 py-3 border border-primary text-primary text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  )
}
