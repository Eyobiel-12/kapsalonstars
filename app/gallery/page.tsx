"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const [language, setLanguage] = useState<"nl" | "en">("nl")
  const [activeCategory, setActiveCategory] = useState("all")

  // Categories of hairstyles
  const categories = [
    { id: "all", name: language === "nl" ? "Alle Stijlen" : "All Styles" },
    { id: "cuts", name: language === "nl" ? "Kapsels" : "Haircuts" },
    { id: "fades", name: language === "nl" ? "Fades" : "Fades" },
    { id: "designs", name: language === "nl" ? "Designs" : "Designs" },
    { id: "kids", name: language === "nl" ? "Kinderen" : "Kids" },
  ]

  // Gallery images with real photos
  const galleryImages = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%283%29-epXF7Zw2DrxzM3ruAQNYeirQNbsQWJ.jpeg",
      alt: language === "nl" ? "Strakke fade achterkant" : "Clean fade back view",
      category: "fades",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%288%29-SshnHQnmdPlEMEwbYrx5GRLTM48ZQH.jpeg",
      alt: language === "nl" ? "Getaperd kapsel met baard styling" : "Tapered haircut with beard styling",
      category: "cuts",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%285%29-W8wGPuVndNiPnFE2uOe2XQq4FVF66E.jpeg",
      alt: language === "nl" ? "High-top fade met getextureerde krullen" : "High-top fade with textured curls",
      category: "fades",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%284%29-IUnwphOnC2obfN8FXLr7TfQFOJ8LQ2.jpeg",
      alt: language === "nl" ? "Custom haar design met patroon" : "Custom hair design with pattern",
      category: "designs",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%289%29-odegyXVoer4WSZbMrLfqhloTICXcwL.jpeg",
      alt: language === "nl" ? "Strakke fade met gestylde bovenkant" : "Clean fade with styled top",
      category: "fades",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%281%29-C5z2WmDPCziwhnaCitVI9bHyroXXzn.jpeg",
      alt: language === "nl" ? "Kinderkapsel met custom design" : "Kids haircut with custom design",
      category: "kids",
    },
    {
      id: 7,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%282%29-onxFOm2SNARFh20TgLY7T2dwMedJl7.jpeg",
      alt: language === "nl" ? "Klassieke taper fade zijaanzicht" : "Classic taper fade side view",
      category: "cuts",
    },
    {
      id: 8,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%2811%29-pshnCpxejyC56ZZO1j564uqxvyN9RC.jpeg",
      alt: language === "nl" ? "Modern fade kapsel" : "Modern fade haircut",
      category: "fades",
    },
    {
      id: 9,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%286%29-J8Kff0UMc1tYGZUeq1AqK2rSTjKxgf.jpeg",
      alt: language === "nl" ? "Getextureerde bovenkant met fade in salon" : "Textured top with fade in salon",
      category: "cuts",
    },
    {
      id: 10,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12-QnXZxltjcJLKYB1U4yOxXu6NmX4PJX.jpeg",
      alt: language === "nl" ? "Klassiek kapsel voor jongens" : "Classic boys haircut",
      category: "kids",
    },
    {
      id: 11,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%2811%29-RCAGz39Wy62GZRtEOPne4yYZZyEKyC.jpeg",
      alt: language === "nl" ? "Strakke fade met zachte overgang" : "Clean fade with soft transition",
      category: "fades",
    },
  ]

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const translations = {
    backToHome: language === "nl" ? "Terug naar Home" : "Back to Home",
    ourGallery: language === "nl" ? "Onze Galerij" : "Our Gallery",
    galleryDescription:
      language === "nl"
        ? "Bekijk onze collectie van prachtige transformaties en haar styling kunstwerken."
        : "Browse through our collection of stunning transformations and hair styling artistry.",
    clientTestimonials: language === "nl" ? "Klantbeoordelingen" : "Client Testimonials",
    testimonialsDescription:
      language === "nl"
        ? "Neem niet alleen ons woord aan. Hier is wat onze klanten te zeggen hebben over hun ervaring."
        : "Don't just take our word for it. Here's what our clients have to say about their experience.",
    view: language === "nl" ? "Bekijken" : "View",
  }

  const testimonials = [
    {
      name: "Sarah J.",
      quote:
        language === "nl"
          ? "Ik kom al jaren naar Kapsalons en ben nog nooit teleurgesteld geweest. De stylisten luisteren echt en leveren elke keer precies wat ik wil."
          : "I've been coming to Kapsalons for years and have never been disappointed. The stylists truly listen and deliver exactly what I want every time.",
      image: "/placeholder.svg?height=200&width=200&text=Sarah",
    },
    {
      name: "Michael T.",
      quote:
        language === "nl"
          ? "Na een slechte ervaring bij een andere salon heeft Kapsalons mijn vertrouwen hersteld. Hun kleurcorrectie was geweldig, en nu ga ik nergens anders meer heen."
          : "After a bad experience at another salon, Kapsalons restored my confidence. Their color correction was amazing, and now I won't go anywhere else.",
      image: "/placeholder.svg?height=200&width=200&text=Michael",
    },
    {
      name: "Emma R.",
      quote:
        language === "nl"
          ? "De sfeer is zo verwelkomend, en de service is top. Mijn stylist gaat altijd een stapje verder om ervoor te zorgen dat ik tevreden vertrek."
          : "The atmosphere is so welcoming, and the service is top-notch. My stylist always goes above and beyond to make sure I leave happy.",
      image: "/placeholder.svg?height=200&width=200&text=Emma",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {translations.backToHome}
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLanguage("nl")}
            className={`px-3 py-1 rounded ${language === "nl" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            NL
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded ${language === "en" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{translations.ourGallery}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{translations.galleryDescription}</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeCategory === category.id
                ? "border-black bg-black text-white"
                : "border-gray-300 hover:border-black hover:bg-black hover:text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden group rounded-lg aspect-square">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {translations.view}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Preview */}
      {/* If you have a video file, you can add it here */}

      {/* Testimonials */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{translations.clientTestimonials}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{translations.testimonialsDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

