"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function PricingPage() {
  const { language, setLanguage, t } = useLanguage()

  const translations = {
    backToHome_nl: "Terug naar Home",
    backToHome_en: "Back to Home",
    pricing_nl: "Prijslijst",
    pricing_en: "Pricing",
    pricingDescription_nl: "Bij Kapsalon Stars bieden we professionele haardiensten voor een eerlijke prijs. Bekijk onze prijslijst hieronder.",
    pricingDescription_en: "At Kapsalon Stars, we offer professional hair services at a fair price. Check out our price list below.",
    menServices_nl: "Heren Diensten",
    menServices_en: "Men's Services",
    womenServices_nl: "Dames Diensten",
    womenServices_en: "Women's Services",
    childrenServices_nl: "Kinderen Diensten",
    childrenServices_en: "Children's Services",
    colorServices_nl: "Kleur Diensten",
    colorServices_en: "Color Services",
    specialServices_nl: "Speciale Diensten",
    specialServices_en: "Special Services",
    bookNow_nl: "Nu Boeken",
    bookNow_en: "Book Now",
    discountInfo_nl: "* Korting voor studenten en senioren (65+) beschikbaar met ID.",
    discountInfo_en: "* Discount available for students and seniors (65+) with ID.",
    priceNote_nl: "Prijzen kunnen variëren afhankelijk van haarlengte en dikte.",
    priceNote_en: "Prices may vary depending on hair length and thickness.",
    consultationInfo_nl: "Gratis consultatie beschikbaar voor alle kleurbehandelingen.",
    consultationInfo_en: "Free consultation available for all color treatments.",
  }

  const menServices = [
    { name_nl: "Knippen", name_en: "Haircut", price: "€18" },
    { name_nl: "Knippen & Wassen", name_en: "Haircut & Wash", price: "€20" },
    { name_nl: "Baard Trimmen", name_en: "Beard Trim", price: "€12" },
    { name_nl: "Knippen & Baard", name_en: "Haircut & Beard", price: "€25" },
    { name_nl: "Hoofdmassage", name_en: "Head Massage", price: "€10" },
    { name_nl: "Senior Knippen (65+)", name_en: "Senior Haircut (65+)", price: "€15" },
  ]

  const womenServices = [
    { name_nl: "Knippen", name_en: "Haircut", price: "€20" },
    { name_nl: "Knippen & Wassen", name_en: "Haircut & Wash", price: "€25" },
    { name_nl: "Knippen & Föhnen", name_en: "Haircut & Blow Dry", price: "€35" },
    { name_nl: "Föhnen", name_en: "Blow Dry", price: "€20" },
    { name_nl: "Opsteken", name_en: "Updo", price: "€45" },
    { name_nl: "Senior Knippen (65+)", name_en: "Senior Haircut (65+)", price: "€18" },
  ]

  const childrenServices = [
    { name_nl: "Kinderen t/m 10 jaar", name_en: "Children up to 10 years", price: "€15" },
    { name_nl: "Tieners (11-16 jaar)", name_en: "Teenagers (11-16 years)", price: "€16" },
  ]

  const colorServices = [
    { name_nl: "Kleuren vanaf", name_en: "Color from", price: "€45" },
    { name_nl: "Highlights vanaf", name_en: "Highlights from", price: "€55" },
    { name_nl: "Balayage vanaf", name_en: "Balayage from", price: "€75" },
    { name_nl: "Ombre vanaf", name_en: "Ombre from", price: "€65" },
    { name_nl: "Toner", name_en: "Toner", price: "€20" },
  ]

  const specialServices = [
    { name_nl: "Keratine Behandeling vanaf", name_en: "Keratin Treatment from", price: "€120" },
    { name_nl: "Haarmasker", name_en: "Hair Mask", price: "€15" },
    { name_nl: "Wenkbrauwen Epileren", name_en: "Eyebrow Threading", price: "€8" },
    { name_nl: "Wenkbrauwen Verven", name_en: "Eyebrow Tinting", price: "€10" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("backToHome", translations)}
        </Link>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>

      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{t("pricing", translations)}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("pricingDescription", translations)}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Men's Services */}
        <SlideUp>
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("menServices", translations)}</h2>
            <ul className="space-y-4">
              {menServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-800">{language === "nl" ? service.name_nl : service.name_en}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>

        {/* Women's Services */}
        <SlideUp delay={0.1}>
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("womenServices", translations)}</h2>
            <ul className="space-y-4">
              {womenServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-800">{language === "nl" ? service.name_nl : service.name_en}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>

        {/* Children's Services */}
        <SlideUp delay={0.2}>
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("childrenServices", translations)}</h2>
            <ul className="space-y-4">
              {childrenServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-800">{language === "nl" ? service.name_nl : service.name_en}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Color Services */}
        <SlideUp delay={0.3}>
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("colorServices", translations)}</h2>
            <ul className="space-y-4">
              {colorServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-800">{language === "nl" ? service.name_nl : service.name_en}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>

        {/* Special Services */}
        <SlideUp delay={0.4}>
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("specialServices", translations)}</h2>
            <ul className="space-y-4">
              {specialServices.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-800">{language === "nl" ? service.name_nl : service.name_en}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </SlideUp>
      </div>

      <SlideUp delay={0.5}>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <p className="text-gray-600">
                {t("discountInfo", translations)}
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-gray-600">
                {t("priceNote", translations)}
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-gray-600">
                {t("consultationInfo", translations)}
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SlideUp>

      <div className="text-center">
        <Link
          href="/booking"
          className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
        >
          {t("bookNow", translations)}
        </Link>
      </div>
    </div>
  )
}

