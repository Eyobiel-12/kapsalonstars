"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      title: "Knippen",
      price: "€18,-",
      description: "Professionele knipbeurt voor heren",
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: "✂️",
      gradient: "from-amber-400/20 to-amber-100/20",
    },
    {
      title: "Baard",
      price: "€15,-",
      description: "Professionele baardverzorging",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "🪒",
      gradient: "from-blue-400/20 to-blue-100/20",
    },
    {
      title: "Knippen 65+",
      price: "€12,-",
      description: "Speciale prijs voor senioren",
      color: "bg-green-50",
      borderColor: "border-green-200",
      icon: "👴",
      gradient: "from-green-400/20 to-green-100/20",
    },
    {
      title: "Knippen & Baard",
      price: "€25,-",
      description: "Complete verzorging voor haar en baard",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "💈",
      gradient: "from-purple-400/20 to-purple-100/20",
    },
    {
      title: "Dames",
      price: "€15,-",
      description: "Professionele knipbeurt voor dames",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      icon: "💇‍♀️",
      gradient: "from-pink-400/20 to-pink-100/20",
    },
    {
      title: "Knippen & Wassen",
      price: "€20,-",
      description: "Complete wasbeurt en knipbehandeling",
      color: "bg-teal-50",
      borderColor: "border-teal-200",
      icon: "🚿",
      gradient: "from-teal-400/20 to-teal-100/20",
    },
    {
      title: "Harsen",
      price: "€8,-",
      description: "Gezichtshars behandeling",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: "✨",
      gradient: "from-yellow-400/20 to-yellow-100/20",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-10">
        <Button asChild variant="ghost" size="icon" className="rounded-full bg-white shadow-lg hover:scale-105 transition-transform">
          <a href="/" className="flex items-center gap-2 text-black">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-96 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-medium tracking-wide uppercase text-black/70 mb-6"
          >
            Welkom bij Kapsalon
          </motion.h2>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-7xl sm:text-9xl font-bold mb-8 text-black tracking-tight">
              Prijslijst
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-black/60 max-w-2xl mx-auto"
          >
            Professionele haarverzorging voor iedereen
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-8 -mt-64 relative z-10 mb-32">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.02, translateY: -2 }}
              className="group bg-white rounded-2xl p-8 shadow-[0_2px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                  <p className="text-3xl font-bold text-black">
                    {service.price}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-black/60 mb-8 text-lg">{service.description}</p>
                <Button
                  asChild
                  className="w-full bg-black text-white text-lg py-6 rounded-xl hover:bg-black/90 transition-all duration-300"
                >
                  <a href="/booking" className="flex items-center justify-center gap-2">
                    Reserveer Nu
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-32">
        <div className="relative overflow-hidden bg-white rounded-3xl p-16 shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <span className="inline-block text-black/70 text-lg font-medium tracking-wide uppercase mb-4">
              Openingstijden
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-black tracking-tight">
              Klaar voor een nieuwe look?
            </h2>
            <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
              Maandag t/m Zaterdag: 9:00 - 18:00 • Zondag: Gesloten
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-black text-white text-lg px-12 py-6 rounded-xl hover:bg-black/90 transition-all duration-300"
              >
                <a href="/booking" className="flex items-center gap-2">
                  Maak Een Afspraak
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white text-black border-black/10 hover:bg-black/5 text-lg px-12 py-6 rounded-xl transition-all duration-300"
              >
                <a href="tel:+31612345678" className="flex items-center gap-2">
                  Bel Ons
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}