"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { FadeIn } from "@/components/animations"

export default function Footer() {
  const { language, t } = useLanguage()

  const translations = {
    quickLinks_nl: "Snelle Links",
    quickLinks_en: "Quick Links",
    home_nl: "Home",
    home_en: "Home",
    services_nl: "Diensten",
    services_en: "Services",
    pricing_nl: "Prijzen",
    pricing_en: "Pricing",
    gallery_nl: "Galerij",
    gallery_en: "Gallery",
    about_nl: "Over Ons",
    about_en: "About Us",
    contact_nl: "Contact",
    contact_en: "Contact",
    bookNow_nl: "Nu Boeken",
    bookNow_en: "Book Now",
    contactUs_nl: "Neem Contact Op",
    contactUs_en: "Contact Us",
    address_nl: "Adres",
    address_en: "Address",
    phone_nl: "Telefoon",
    phone_en: "Phone",
    email_nl: "E-mail",
    email_en: "Email",
    followUs_nl: "Volg Ons",
    followUs_en: "Follow Us",
    copyright_nl: "© 2025 Kapsalon Stars. Alle rechten voorbehouden.",
    copyright_en: "© 2025 Kapsalon Stars. All rights reserved.",
    privacyPolicy_nl: "Privacybeleid",
    privacyPolicy_en: "Privacy Policy",
    termsOfService_nl: "Servicevoorwaarden",
    termsOfService_en: "Terms of Service",
  }

  return (
    <FadeIn>
      <footer className="bg-gray-900 text-white pt-10 sm:pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("quickLinks", translations)}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    {t("home", translations)}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    {t("services", translations)}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    {t("pricing", translations)}
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                    {t("gallery", translations)}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    {t("about", translations)}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    {t("contact", translations)}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("contactUs", translations)}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    <strong>{t("address", translations)}:</strong>
                    <br />
                    Hofstraat 117a
                    <br />
                    7311 KT Apeldoorn
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    <strong>{t("phone", translations)}:</strong> 06 87 27 36 58
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    <strong>{t("email", translations)}:</strong> kapsalonstars@gmail.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Social & CTA */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("followUs", translations)}</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/kapsalonstars/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/kapsalonstars/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
              <Link
                href="/booking"
                className="bg-white text-gray-900 hover:bg-gray-200 px-5 sm:px-6 py-2 rounded-full font-medium inline-block transition-colors text-sm sm:text-base"
              >
                {t("bookNow", translations)}
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">{t("copyright", translations)}</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                {t("privacyPolicy", translations)}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                {t("termsOfService", translations)}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}

