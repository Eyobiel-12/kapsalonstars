"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function ContactPage() {
  const { language, setLanguage, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert(language === "nl" ? "Bericht verzonden!" : "Message sent!")
  }

  const translations = {
    backToHome_nl: "Terug naar Home",
    backToHome_en: "Back to Home",
    contactUs_nl: "Contact Kapsalon Stars",
    contactUs_en: "Contact Kapsalon Stars",
    contactDescription_nl: "We horen graag van je. Neem contact op met vragen, feedback of om een afspraak te maken bij Kapsalon Stars.",
    contactDescription_en: "We'd love to hear from you. Reach out with any questions, feedback, or to schedule an appointment at Kapsalon Stars.",
    getInTouch_nl: "Neem Contact Op",
    getInTouch_en: "Get in Touch",
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
    phone_nl: "Telefoon",
    phone_en: "Phone",
    email_nl: "E-mail",
    email_en: "Email",
    followUs_nl: "Volg Ons",
    followUs_en: "Follow Us",
    sendMessage_nl: "Stuur Ons een Bericht",
    sendMessage_en: "Send Us a Message",
    yourName_nl: "Uw Naam *",
    yourName_en: "Your Name *",
    emailAddress_nl: "E-mailadres *",
    emailAddress_en: "Email Address *",
    subject_nl: "Onderwerp *",
    subject_en: "Subject *",
    message_nl: "Bericht *",
    message_en: "Message *",
    send_nl: "Versturen",
    send_en: "Send Message",
    bookAppointment_nl: "Maak een Afspraak",
    bookAppointment_en: "Book an Appointment",
    bookDescription_nl: "Klaar om je look te transformeren? Maak vandaag nog een afspraak bij een van onze expert stylisten.",
    bookDescription_en: "Ready to transform your look? Book an appointment with one of our expert stylists today.",
    bookNow_nl: "Nu Boeken",
    bookNow_en: "Book Now",
    faq_nl: "Veelgestelde Vragen",
    faq_en: "Frequently Asked Questions",
    faqDescription_nl: "Vind antwoorden op onze meest gestelde vragen.",
    faqDescription_en: "Find answers to our most commonly asked questions.",
    enterName_nl: "Voer uw naam in",
    enterName_en: "Enter your name",
    enterEmail_nl: "Voer uw e-mailadres in",
    enterEmail_en: "Enter your email",
    enterSubject_nl: "Voer onderwerp in",
    enterSubject_en: "Enter subject",
    enterMessage_nl: "Voer uw bericht in",
    enterMessage_en: "Enter your message",
  }

  const faqItems = [
    {
      question_nl: "Nemen jullie klanten zonder afspraak aan?",
      question_en: "Do you take walk-ins?",
      answer_nl: "Ja, we accepteren klanten zonder afspraak op basis van beschikbaarheid. We raden echter aan om een afspraak te maken om ervoor te zorgen dat je je gewenste tijdslot en stylist krijgt.",
      answer_en: "Yes, we accept walk-ins based on availability. However, we recommend booking an appointment to ensure you get your preferred time slot and stylist.",
    },
    {
      question_nl: "Wat is jullie annuleringsbeleid?",
      question_en: "What is your cancellation policy?",
      answer_nl: "We vragen om een annulering 24 uur van tevoren door te geven. Late annuleringen of no-shows kunnen onderhevig zijn aan een annuleringsvergoeding.",
      answer_en: "We require a 24-hour notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee.",
    },
    {
      question_nl: "Bieden jullie cadeaubonnen aan?",
      question_en: "Do you offer gift certificates?",
      answer_nl: "Ja, we bieden cadeaubonnen aan in elk gewenst bedrag. Ze kunnen in de salon of telefonisch worden gekocht.",
      answer_en: "Yes, we offer gift certificates in any denomination. They can be purchased in-salon or by phone.",
    },
    {
      question_nl: "Welke haarproducten gebruiken jullie?",
      question_en: "What hair products do you use?",
      answer_nl: "We gebruiken professionele producten van toonaangevende merken die zijn geselecteerd op hun kwaliteit en prestaties.",
      answer_en: "We use professional-grade products from leading brands that are selected for their quality and performance.",
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{t("contactUs", translations)}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("contactDescription", translations)}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <SlideUp>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("getInTouch", translations)}</h2>

            <div className="space-y-6">
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
                  <p className="text-gray-600">
                    {t("monday", translations)}: 11:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    {t("tuesday", translations)}: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    {t("wednesday", translations)}: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    {t("thursday", translations)}: 09:00 - 20:00
                  </p>
                  <p className="text-gray-600">
                    {t("friday", translations)}: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    {t("saturday", translations)}: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    {t("sunday", translations)}: {t("closed", translations)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t("phone", translations)}</h3>
                  <p className="text-gray-600">06 87 27 36 58</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t("email", translations)}</h3>
                  <p className="text-gray-600">kapsalonstars@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-800 mb-3">{t("followUs", translations)}</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kapsalonstars/" className="text-gray-600 hover:text-black transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/kapsalonstars/" className="text-gray-600 hover:text-black transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px]">
              {/* Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.7501330080167!2d5.960591777217973!3d52.211588071981915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7c7e9ac63f4ad%3A0x1f7ea8ea7cbedfa4!2sKapsalon%20Stars!5e0!3m2!1sen!2snl!4v1741792043009!5m2!1sen!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kapsalon Stars location"
                aria-label="Google Maps showing Kapsalon Stars location"
              ></iframe>
            </div>
          </div>
        </SlideUp>

        {/* Contact Form */}
        <SlideUp delay={0.1}>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t("sendMessage", translations)}</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("yourName", translations)}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={t("enterName", translations)}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("emailAddress", translations)}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={t("enterEmail", translations)}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("subject", translations)}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={t("enterSubject", translations)}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("message", translations)}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={t("enterMessage", translations)}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium transition-colors"
                >
                  {t("send", translations)}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-black text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t("bookAppointment", translations)}</h3>
            <p className="mb-6">
              {t("bookDescription", translations)}
            </p>
            <Link
              href="/booking"
              className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {t("bookNow", translations)}
            </Link>
          </div>
        </SlideUp>
      </div>

      {/* FAQ Section */}
      <SlideUp delay={0.2}>
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("faq", translations)}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("faqDescription", translations)}</p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {language === "nl" ? faq.question_nl : faq.question_en}
                  </h3>
                  <p className="text-gray-600">
                    {language === "nl" ? faq.answer_nl : faq.answer_en}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SlideUp>
    </div>
  )
}

