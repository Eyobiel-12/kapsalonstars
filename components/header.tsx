"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import LanguageSwitcher from "./language-switcher"
import { FadeIn, HoverScale } from "./animations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translations = {
    home_nl: "Home",
    home_en: "Home",
    services_nl: "Diensten",
    services_en: "Services",
    about_nl: "Over Ons",
    about_en: "About Us",
    gallery_nl: "Galerij",
    gallery_en: "Gallery",
    booking_nl: "Afspraak Maken",
    booking_en: "Book Now",
    contact_nl: "Contact",
    contact_en: "Contact",
  }

  const navLinks = [
    { href: "/", label: t("home", translations) },
    { href: "/services", label: t("services", translations) },
    { href: "/about", label: t("about", translations) },
    { href: "/gallery", label: t("gallery", translations) },
    { href: "/contact", label: t("contact", translations) },
  ]

  return (
    <FadeIn>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-sky-100 shadow-md py-2" : "bg-sky-100/95 backdrop-blur-sm py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center text-xl sm:text-2xl font-bold text-gray-900">
              <HoverScale>
                <div className="flex items-center">
                  <img src="/logo.png" alt="Kapsalon Stars Logo" className="h-8 w-8 mr-2" />
                  <span>Kapsalon Stars</span>
                </div>
              </HoverScale>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm lg:text-base text-gray-600 hover:text-black transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              <Link
                href="/booking"
                className="bg-black text-white text-sm lg:text-base px-4 lg:px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {t("booking", translations)}
              </Link>
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-black transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t mt-2 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("booking", translations)}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </nav>
        )}
      </header>
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className={`${isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"} transition-all duration-300`}></div>
    </FadeIn>
  )
}

