"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Scissors, Calendar, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Suspense, lazy, useEffect, useState } from "react"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations"
import { ScissorsAnimation, CombAnimation, ShineEffect } from "@/components/barber-animations"
import LanguageSwitcher from "@/components/language-switcher"

// Dynamically import heavy components to improve initial load time
const YouTubeBackground = lazy(() => import("@/components/YouTubeBackground"))
const FallbackHeroBackground = lazy(() => import("@/components/FallbackHeroBackground"))
const FloatingHair = lazy(() => import("@/components/barber-animations/FloatingHair"))
const BarberPole = lazy(() => import("@/components/barber-animations/BarberPole"))

// Simple loading fallback
const LoadingFallback = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"></div>
);

export default function Home() {
  const { language, setLanguage, t } = useLanguage()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showAnimations, setShowAnimations] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // YouTube video ID for a barber shop video
  const youtubeVideoId = "_GSc3uAm8rQ" // Video ID from user's provided URL

  useEffect(() => {
    // Set client-side rendering flag
    setIsClient(true)
    
    // Add a listener to receive loading status from YouTubeBackground
    const handleVideoStatus = (event: CustomEvent) => {
      console.log('Video status event:', event.detail.status);
      if (event.detail.status === 'loaded') {
        setVideoLoaded(true)
        console.log('YouTube video loaded successfully');
      } else if (event.detail.status === 'error') {
        setVideoError(true)
        console.error('Error loading YouTube video');
      }
    }
    
    window.addEventListener('youtube-video-status' as any, handleVideoStatus)
    
    // Force fallback after 10 seconds if video doesn't load (increased from 5 seconds)
    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        console.warn('YouTube video load timeout - switching to fallback');
        setVideoError(true)
      }
    }, 10000)
    
    // Delay heavy animations for better initial performance
    const animationTimeout = setTimeout(() => {
      setShowAnimations(true)
    }, 1000)
    
    return () => {
      window.removeEventListener('youtube-video-status' as any, handleVideoStatus)
      clearTimeout(timeout)
      clearTimeout(animationTimeout)
    }
  }, [videoLoaded])

  const translations = {
    heroTitle_nl: "Kapsalon Stars",
    heroTitle_en: "Kapsalon Stars",
    heroSubtitle_nl: "Waar stijl vertrouwen ontmoet. Ervaar de kunst van haartransformatie.",
    heroSubtitle_en: "Where style meets confidence. Experience the art of hair transformation.",
    bookAppointment_nl: "Afspraak Maken",
    bookAppointment_en: "Book Appointment",
    ourServices_nl: "Onze Diensten",
    ourServices_en: "Our Services",
    servicesDescription_nl: "Van klassieke kapsels tot trendy stijlen, onze expert stylisten leveren gepersonaliseerde haardiensten die passen bij jouw unieke stijl.",
    servicesDescription_en: "From classic cuts to trendy styles, our expert stylists deliver personalized hair services to match your unique style.",
    haircutsStyling_nl: "Knippen & Styling",
    haircutsStyling_en: "Haircuts & Styling",
    haircutsDescription_nl: "Precisie knippen en styling voor alle haartypes en voorkeuren.",
    haircutsDescription_en: "Precision cuts and styling for all hair types and preferences.",
    colorHighlights_nl: "Kleur & Highlights",
    colorHighlights_en: "Color & Highlights",
    colorDescription_nl: "Levendige kleuren, natuurlijke highlights en deskundige kleurcorrectie.",
    colorDescription_en: "Vibrant colors, natural highlights, and expert color correction.",
    treatmentsCare_nl: "Behandelingen & Verzorging",
    treatmentsCare_en: "Treatments & Care",
    treatmentsDescription_nl: "Voedende behandelingen om gezond haar te herstellen en te behouden.",
    treatmentsDescription_en: "Nourishing treatments to restore and maintain healthy hair.",
    learnMore_nl: "Meer informatie",
    learnMore_en: "Learn more",
    viewAllServices_nl: "Bekijk alle diensten",
    viewAllServices_en: "View all services",
    ourGallery_nl: "Onze Galerij",
    ourGallery_en: "Our Gallery",
    galleryDescription_nl: "Blader door onze collectie van prachtige transformaties en haarstyling kunst.",
    galleryDescription_en: "Browse through our collection of stunning transformations and hair styling artistry.",
    view_nl: "Bekijken",
    view_en: "View",
    viewFullGallery_nl: "Bekijk volledige galerij",
    viewFullGallery_en: "View full gallery",
    meetOurTeam_nl: "Ontmoet Ons Team",
    meetOurTeam_en: "Meet Our Team",
    teamDescription_nl: "Onze getalenteerde stylisten brengen jaren ervaring, creativiteit en passie mee naar elke service.",
    teamDescription_en: "Our talented stylists bring years of experience, creativity, and passion to every service.",
    masterStylist_nl: "Meester Stylist",
    masterStylist_en: "Master Stylist",
    seniorStylist_nl: "Senior Stylist",
    seniorStylist_en: "Senior Stylist",
    styleDirector_nl: "Style Directeur",
    styleDirector_en: "Style Director",
    adliBio_nl: "Met jarenlange ervaring, specialiseert Adli zich in precisie knippen en creatieve styling.",
    adliBio_en: "With years of experience, Adli specializes in precision cuts and creative styling.",
    na3matBio_nl: "Na3mat staat bekend om het creëren van moeiteloze, natuurlijk ogende stijlen die de natuurlijke schoonheid versterken.",
    na3matBio_en: "Na3mat is known for creating effortless, lived-in styles that enhance natural beauty.",
    haskoBio_nl: "Hasko blinkt uit in moderne styling en creatief werk voor alle gelegenheden.",
    haskoBio_en: "Hasko excels in modern styling and creative work for all occasions.",
    learnMoreTeam_nl: "Meer over ons team",
    learnMoreTeam_en: "Learn more about our team",
    ourPrices_nl: "Onze Prijzen",
    ourPrices_en: "Our Prices",
    pricesDescription_nl: "Transparante prijzen voor al onze premium haardiensten.",
    pricesDescription_en: "Transparent pricing for all our premium hair services.",
    haircuts_nl: "Knippen",
    haircuts_en: "Haircuts",
    styling_nl: "Styling",
    styling_en: "Styling",
    color_nl: "Kleur",
    color_en: "Color",
    viewPriceList_nl: "Bekijk volledige prijslijst",
    viewPriceList_en: "View complete price list",
    visitUs_nl: "Bezoek Ons",
    visitUs_en: "Visit Us",
    visitDescription_nl: "We verwelkomen je graag in onze salon. Maak een afspraak of loop gewoon binnen tijdens onze openingstijden.",
    visitDescription_en: "We'd love to welcome you to our salon. Book an appointment or simply walk in during our business hours.",
    location_nl: "Locatie",
    location_en: "Location",
    hours_nl: "Openingstijden",
    hours_en: "Hours",
    monday_nl: "Maandag",
    monday_en: "Monday",
    tuesday_nl: "Dinsdag",
    tuesday_en: "Tuesday",
    wednesday_nl: "Woensdag",
    wednesday_en: "Wednesday",
    thursday_nl: "Donderdag",
    thursday_en: "Thursday",
    friday_nl: "Vrijdag",
    friday_en: "Friday",
    saturday_nl: "Zaterdag",
    saturday_en: "Saturday",
    sunday_nl: "Zondag",
    sunday_en: "Sunday",
    closed_nl: "Gesloten",
    closed_en: "Closed",
    contact_nl: "Contact",
    contact_en: "Contact",
    phone_nl: "Telefoon",
    phone_en: "Phone",
    email_nl: "E-mail",
    email_en: "Email",
    contactUs_nl: "Neem Contact Op",
    contactUs_en: "Contact Us",
  }

  // Optimize the hero section background
  const renderHeroBackground = () => {
    // Only render on client side to avoid hydration mismatch
    if (!isClient) return <LoadingFallback />;
    
    // Log debug info outside of JSX
    if (videoError) {
      console.log('Using fallback background due to error');
    } else {
      console.log('Attempting to render YouTube background');
    }
    
    return (
      <>
        <Suspense fallback={<LoadingFallback />}>
          {videoError ? (
            <FallbackHeroBackground />
          ) : (
            <YouTubeBackground videoId={youtubeVideoId} />
          )}
        </Suspense>
        
        {/* Only render FloatingHair when animations are enabled */}
        {showAnimations && (
          <Suspense fallback={null}>
            <FloatingHair count={10} />
          </Suspense>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b-0">
          {renderHeroBackground()}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">{t("heroTitle", translations)}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto drop-shadow-md">
              {t("heroSubtitle", translations)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-black hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                {t("bookAppointment", translations)} <Calendar className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-100 text-black border border-gray-300 px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                {t("ourServices", translations)} <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Services Preview - using a different approach without animation */}
      <div className="relative bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Dynamic background elements with animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-100 rounded-full opacity-25 animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-50 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t("ourServices", translations)}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("servicesDescription", translations)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg transition-all text-center transform hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="absolute inset-0 border border-white border-opacity-60 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <ScissorsAnimation>
                    <Scissors className="h-10 w-10 text-gray-800" />
                  </ScissorsAnimation>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t("haircutsStyling", translations)}</h3>
                <p className="text-gray-600 mb-4">{t("haircutsDescription", translations)}</p>
                <Link 
                  href="/services" 
                  className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all max-w-fit mx-auto"
                >
                  {t("learnMore", translations)} <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg transition-all text-center transform hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
              <div className="absolute inset-0 border border-white border-opacity-60 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-10 bg-pink-300 rounded"></div>
                    <div className="w-2 h-10 bg-purple-300 rounded"></div>
                    <div className="w-2 h-10 bg-blue-300 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t("colorHighlights", translations)}</h3>
                <p className="text-gray-600 mb-4">{t("colorDescription", translations)}</p>
                <Link 
                  href="/services" 
                  className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all max-w-fit mx-auto"
                >
                  {t("learnMore", translations)} <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-8 rounded-lg hover:shadow-lg transition-all text-center transform hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-50"></div>
              <div className="absolute inset-0 border border-white border-opacity-60 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t("treatmentsCare", translations)}</h3>
                <p className="text-gray-600 mb-4">{t("treatmentsDescription", translations)}</p>
                <Link 
                  href="/services" 
                  className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all max-w-fit mx-auto"
                >
                  {t("learnMore", translations)} <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-block border-b-2 border-black text-black font-medium hover:border-blue-500 hover:text-blue-700 transition-all"
            >
              {t("viewAllServices", translations)}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <SlideUp delay={0.1}>
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t("ourGallery", translations)}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("galleryDescription", translations)}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <HoverScale>
                <div className="relative overflow-hidden group rounded-lg aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%288%29-SshnHQnmdPlEMEwbYrx5GRLTM48ZQH.jpeg"
                    alt="Tapered haircut with beard styling"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {t("view", translations)}
                    </span>
                  </div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="relative overflow-hidden group rounded-lg aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%285%29-W8wGPuVndNiPnFE2uOe2XQq4FVF66E.jpeg"
                    alt="High-top fade with textured curls"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {t("view", translations)}
                    </span>
                  </div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="relative overflow-hidden group rounded-lg aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%284%29-IUnwphOnC2obfN8FXLr7TfQFOJ8LQ2.jpeg"
                    alt="Custom hair design with pattern"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {t("view", translations)}
                    </span>
                  </div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="relative overflow-hidden group rounded-lg aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-11%20at%2015.00.12%20%281%29-C5z2WmDPCziwhnaCitVI9bHyroXXzn.jpeg"
                    alt="Kids haircut with custom design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {t("view", translations)}
                    </span>
                  </div>
                </div>
              </HoverScale>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-block border-b-2 border-black text-black font-medium hover:border-gray-500 transition-all"
              >
                {t("viewFullGallery", translations)}
              </Link>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* Team Section */}
      <SlideUp delay={0.2}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t("meetOurTeam", translations)}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("teamDescription", translations)}
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Adli",
                  role: t("masterStylist", translations),
                  bio: t("adliBio", translations),
                  image: "/team/adli.jpeg",
                },
                {
                  name: "Na3mat",
                  role: t("seniorStylist", translations) + " & " + (language === "nl" ? "Eigenaar" : "Owner"),
                  bio: t("na3matBio", translations),
                  image: "/team/na3mat.jpeg",
                },
                {
                  name: "Hasko",
                  role: t("styleDirector", translations),
                  bio: t("haskoBio", translations),
                  image: "/team/hasko.jpeg",
                },
              ].map((stylist, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
                    <div className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 shadow-md transform transition-transform hover:scale-105 relative">
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: "center 30%" }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{stylist.name}</h3>
                    <p className="text-gray-500 mb-2">{stylist.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{stylist.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="text-center mt-12">
              <Link
                href="/about"
                className="inline-block border-b-2 border-black text-black font-medium hover:border-gray-500 transition-all"
              >
                {t("learnMoreTeam", translations)}
              </Link>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* Pricing Preview */}
      <SlideUp delay={0.3}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t("ourPrices", translations)}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t("pricesDescription", translations)}</p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  category: t("haircuts", translations),
                  services: [
                    { name: language === "nl" ? "Dames Knipbeurt" : "Women's Cut", price: "€20" },
                    { name: language === "nl" ? "Heren Knipbeurt" : "Men's Cut", price: "€18" },
                    { name: language === "nl" ? "Kinderen Knipbeurt" : "Children's Cut", price: "€15" },
                  ],
                },
                {
                  category: t("styling", translations),
                  services: [
                    { name: language === "nl" ? "Föhnen" : "Blowout", price: "€35+" },
                    { name: language === "nl" ? "Speciale Gelegenheid" : "Special Occasion", price: "€65+" },
                    { name: language === "nl" ? "Bruidskapsels" : "Bridal Hair", price: "€120+" },
                  ],
                },
                {
                  category: t("color", translations),
                  services: [
                    { name: language === "nl" ? "Enkele Proces" : "Single Process", price: "€75+" },
                    { name: language === "nl" ? "Highlights" : "Highlights", price: "€95+" },
                    { name: language === "nl" ? "Balayage" : "Balayage", price: "€150+" },
                  ],
                },
              ].map((category, index) => (
                <StaggerItem key={index}>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">{category.category}</h3>
                    <div className="space-y-3">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">{service.name}</span>
                          <span className="font-medium text-gray-900">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="inline-block border-b-2 border-black text-black font-medium hover:border-gray-500 transition-all"
              >
                {t("viewPriceList", translations)}
              </Link>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* Contact Info */}
      <SlideUp delay={0.4}>
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t("visitUs", translations)}</h2>
                <p className="text-gray-600 mb-6">
                  {t("visitDescription", translations)}
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{t("location", translations)}</h3>
                      <p className="text-gray-600">Hofstraat 117a</p>
                      <p className="text-gray-600">7311 KT Apeldoorn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{t("hours", translations)}</h3>
                      <p className="text-gray-600">{t("monday", translations)}: 11:00 - 18:00</p>
                      <p className="text-gray-600">{t("tuesday", translations)} - {t("friday", translations)}: 09:00 - 18:00</p>
                      <p className="text-gray-600">{t("thursday", translations)}: 09:00 - 20:00</p>
                      <p className="text-gray-600">{t("saturday", translations)}: 09:00 - 18:00</p>
                      <p className="text-gray-600">{t("sunday", translations)}: {t("closed", translations)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{t("contact", translations)}</h3>
                      <p className="text-gray-600">{t("phone", translations)}: 06 87 27 36 58</p>
                      <p className="text-gray-600">{t("email", translations)}: kapsalonstars@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link
                    href="/contact"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all"
                  >
                    {t("contactUs", translations)} <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 z-10">
                  <BarberPole />
                </div>
                <ShineEffect>
                  <img
                    src="/salon-interior.jpg"
                    alt="Salon interior"
                    className="w-full h-full object-cover"
                  />
                </ShineEffect>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>
    </div>
  )
}

