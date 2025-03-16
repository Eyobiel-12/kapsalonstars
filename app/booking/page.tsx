"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, MessageSquare, Loader2, Tag } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function BookingPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [language, setLanguage] = useState<"nl" | "en">("nl")
  const [discountCode, setDiscountCode] = useState("")
  const [discountApplied, setDiscountApplied] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [isCheckingCode, setIsCheckingCode] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    stylist: "",
    notes: "",
    discountCode: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value)
    setDiscountApplied(false)
  }

  const checkDiscountCode = async () => {
    if (!discountCode) return

    setIsCheckingCode(true)
    try {
      const response = await fetch(`/api/booking?code=${discountCode}`)
      const data = await response.json()

      if (data.valid) {
        setDiscountApplied(true)
        setDiscountAmount(data.discount)
        setFormData((prev) => ({
          ...prev,
          discountCode: discountCode,
        }))

        toast({
          title: language === "nl" ? "Kortingscode toegepast" : "Discount code applied",
          description:
            language === "nl"
              ? `${data.discount}% korting toegepast op je afspraak`
              : `${data.discount}% discount applied to your appointment`,
        })
      } else {
        toast({
          title: language === "nl" ? "Ongeldige code" : "Invalid code",
          description:
            language === "nl"
              ? "Deze kortingscode is ongeldig of al gebruikt"
              : "This discount code is invalid or has already been used",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: language === "nl" ? "Fout" : "Error",
        description:
          language === "nl"
            ? "Er is een fout opgetreden bij het controleren van de kortingscode"
            : "There was an error checking the discount code",
        variant: "destructive",
      })
    } finally {
      setIsCheckingCode(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          discountCode: discountApplied ? discountCode : "",
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: language === "nl" ? "Afspraak Succesvol!" : "Booking Successful!",
          description:
            language === "nl"
              ? `Je afspraak is aangevraagd. Referentie: ${data.bookingReference}`
              : `Your appointment has been requested. Reference: ${data.bookingReference}`,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          stylist: "",
          notes: "",
          discountCode: "",
        })
        setDiscountCode("")
        setDiscountApplied(false)
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast({
        title: language === "nl" ? "Afspraak Mislukt" : "Booking Failed",
        description:
          language === "nl"
            ? "Er is een probleem opgetreden bij het indienen van je afspraak. Probeer het opnieuw."
            : "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Services from the price list
  const services = [
    { name: language === "nl" ? "Knippen" : "Haircut", price: "€18" },
    { name: language === "nl" ? "Baard" : "Beard", price: "€12" },
    { name: language === "nl" ? "Knippen & Baard" : "Cut & Beard", price: "€25" },
    { name: language === "nl" ? "Knippen & Wassen" : "Cut & Wash", price: "€20" },
    { name: language === "nl" ? "Kinderen t/m 10 jaar" : "Children's Cut (up to 10)", price: "€15" },
    { name: language === "nl" ? "Knippen 65+" : "Senior Cut (65+)", price: "€15" },
    { name: language === "nl" ? "Dames" : "Ladies Cut", price: "€20" },
    { name: language === "nl" ? "Harsen" : "Waxing", price: "€8" },
  ]

  const stylists = [
    language === "nl" ? "Elke Beschikbare Stylist" : "Any Available Stylist",
    "Alex - " + (language === "nl" ? "Meester Stylist" : "Master Stylist"),
    "Jordan - " + (language === "nl" ? "Senior Stylist" : "Senior Stylist"),
    "Taylor - " + (language === "nl" ? "Kleurspecialist" : "Color Specialist"),
    "Morgan - " + (language === "nl" ? "Style Directeur" : "Style Director"),
  ]

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split("T")[0]

  const translations = {
    backToHome: language === "nl" ? "Terug naar Home" : "Back to Home",
    bookAppointment: language === "nl" ? "Maak een Afspraak" : "Book an Appointment",
    formDescription:
      language === "nl"
        ? "Vul het onderstaande formulier in om een afspraak aan te vragen. We nemen contact met je op om je boeking te bevestigen."
        : "Fill out the form below to request an appointment. We'll contact you to confirm your booking.",
    fullName: language === "nl" ? "Volledige Naam *" : "Full Name *",
    yourName: language === "nl" ? "Jouw naam" : "Your name",
    emailAddress: language === "nl" ? "E-mailadres *" : "Email Address *",
    yourEmail: language === "nl" ? "Jouw e-mail" : "Your email",
    phoneNumber: language === "nl" ? "Telefoonnummer *" : "Phone Number *",
    yourPhone: language === "nl" ? "Jouw telefoonnummer" : "Your phone number",
    preferredDate: language === "nl" ? "Gewenste Datum *" : "Preferred Date *",
    preferredTime: language === "nl" ? "Gewenste Tijd *" : "Preferred Time *",
    selectTime: language === "nl" ? "Selecteer een tijd" : "Select a time",
    service: language === "nl" ? "Dienst *" : "Service *",
    selectService: language === "nl" ? "Selecteer een dienst" : "Select a service",
    preferredStylist: language === "nl" ? "Voorkeur Stylist" : "Preferred Stylist",
    selectStylist: language === "nl" ? "Selecteer een stylist" : "Select a stylist",
    additionalNotes: language === "nl" ? "Aanvullende Opmerkingen" : "Additional Notes",
    notesPlaceholder:
      language === "nl"
        ? "Vertel ons over je haarwensen of speciale verzoeken"
        : "Tell us about your hair goals or any special requests",
    requestAppointment: language === "nl" ? "Afspraak Aanvragen" : "Request Appointment",
    processing: language === "nl" ? "Verwerken..." : "Processing...",
    bookingInfo: language === "nl" ? "Afspraak Informatie" : "Booking Information",
    hoursOfOperation: language === "nl" ? "Openingstijden" : "Hours of Operation",
    monday: language === "nl" ? "Maandag - Vrijdag" : "Monday - Friday",
    saturday: language === "nl" ? "Zaterdag" : "Saturday",
    sunday: language === "nl" ? "Zondag" : "Sunday",
    closed: language === "nl" ? "Gesloten" : "Closed",
    priceList: language === "nl" ? "Prijslijst" : "Price List",
    contactInfo: language === "nl" ? "Contactgegevens" : "Contact Information",
    firstTimeClient: language === "nl" ? "Eerste Keer Klant?" : "First Time Client?",
    discountOffer:
      language === "nl"
        ? "Geniet van 15% korting op je eerste service bij online boeken. Gebruik code WELCOME15 bij je afspraak."
        : "Enjoy 15% off your first service when you book online. Use code WELCOME15 at your appointment.",
    exploreServices: language === "nl" ? "Ontdek Onze Diensten" : "Explore Our Services",
    discountCode: language === "nl" ? "Kortingscode" : "Discount Code",
    applyCode: language === "nl" ? "Code Toepassen" : "Apply Code",
    discountCodePlaceholder: language === "nl" ? "Voer kortingscode in" : "Enter discount code",
    checking: language === "nl" ? "Controleren..." : "Checking...",
  }

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{translations.bookAppointment}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{translations.formDescription}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Booking Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.fullName}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder={translations.yourName}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.emailAddress}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder={translations.yourEmail}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.phoneNumber}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder={translations.yourPhone}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.preferredDate}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.preferredTime}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                    disabled={isSubmitting}
                  >
                    <option value="">{translations.selectTime}</option>
                    {[
                      "9:00",
                      "9:30",
                      "10:00",
                      "10:30",
                      "11:00",
                      "11:30",
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "14:00",
                      "14:30",
                      "15:00",
                      "15:30",
                      "16:00",
                      "16:30",
                      "17:00",
                      "17:30",
                      "18:00",
                      "18:30",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                  disabled={isSubmitting}
                >
                  <option value="">{translations.selectService}</option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stylist */}
              <div>
                <label htmlFor="stylist" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.preferredStylist}
                </label>
                <select
                  id="stylist"
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                  disabled={isSubmitting}
                >
                  <option value="">{translations.selectStylist}</option>
                  {stylists.map((stylist) => (
                    <option key={stylist} value={stylist}>
                      {stylist}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Discount Code */}
            <div>
              <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.discountCode}
              </label>
              <div className="flex space-x-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="discountCode"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    className={`pl-10 w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                      discountApplied ? "border-green-500 bg-green-50" : "border-gray-300"
                    }`}
                    placeholder={translations.discountCodePlaceholder}
                    disabled={isSubmitting || discountApplied}
                  />
                </div>
                <button
                  type="button"
                  onClick={checkDiscountCode}
                  disabled={isCheckingCode || !discountCode || discountApplied || isSubmitting}
                  className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md font-medium transition-colors disabled:bg-gray-400"
                >
                  {isCheckingCode ? (
                    <>
                      <Loader2 className="animate-spin inline-block mr-2 h-4 w-4" />
                      {translations.checking}
                    </>
                  ) : (
                    translations.applyCode
                  )}
                </button>
              </div>
              {discountApplied && (
                <p className="text-green-600 text-sm mt-1">
                  {language === "nl" ? `${discountAmount}% korting toegepast!` : `${discountAmount}% discount applied!`}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                {translations.additionalNotes}
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={translations.notesPlaceholder}
                  disabled={isSubmitting}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    {translations.processing}
                  </>
                ) : (
                  translations.requestAppointment
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Booking Information */}
        <div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{translations.bookingInfo}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{translations.hoursOfOperation}</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">{translations.monday}</span>
                    <span className="font-medium">9:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{translations.saturday}</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{translations.sunday}</span>
                    <span className="font-medium">{translations.closed}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{translations.priceList}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{service.name}</span>
                      <span className="font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{translations.contactInfo}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">06 - 87 27 36 58</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">info@kapsalons.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-black text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{translations.firstTimeClient}</h3>
            <p className="mb-6">{translations.discountOffer}</p>
            <Link
              href="/services"
              className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {translations.exploreServices}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

