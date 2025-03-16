"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function AboutPage() {
  const { language, setLanguage, t } = useLanguage()

  const translations = {
    backToHome_nl: "Terug naar Home",
    backToHome_en: "Back to Home",
    aboutUs_nl: "Over Ons",
    aboutUs_en: "About Us",
    aboutDescription_nl: "Maak kennis met het team achter Kapsalon Stars en ontdek onze passie voor haarstyling.",
    aboutDescription_en: "Meet the team behind Kapsalon Stars and discover our passion for hair styling.",
    ourStory_nl: "Ons Verhaal",
    ourStory_en: "Our Story",
    storyContent_nl: "Kapsalon Stars werd opgericht met een duidelijke visie: een salon creëren waar klanten zich thuis voelen en met vertrouwen vertrekken. Onze reis begon met een passie voor haarstyling en een toewijding aan uitmuntendheid. Door de jaren heen hebben we onze vaardigheden verfijnd en onze diensten uitgebreid, maar onze kernwaarden zijn hetzelfde gebleven - kwaliteit, creativiteit en klanttevredenheid staan voorop.",
    storyContent_en: "Kapsalon Stars was founded with a clear vision: to create a salon where clients feel at home and leave with confidence. Our journey began with a passion for hair styling and a commitment to excellence. Over the years, we've refined our skills and expanded our services, but our core values have remained the same - quality, creativity, and customer satisfaction come first.",
    meetOwner_nl: "Ontmoet de Eigenaar",
    meetOwner_en: "Meet the Owner",
    ownerName_nl: "Na3mat",
    ownerName_en: "Na3mat",
    ownerTitle_nl: "Eigenaar & Hoofdstylist",
    ownerTitle_en: "Owner & Head Stylist",
    ownerBio_nl: "Na3mat brengt meer dan 15 jaar ervaring in de haarindustrie met zich mee. Met een scherp oog voor detail en een passie voor het creëren van looks die de natuurlijke schoonheid van elke klant versterken, heeft Na3mat een reputatie opgebouwd voor uitmuntendheid en innovatie. Als eigenaar van Kapsalon Stars, is Na3mat toegewijd aan het bieden van uitzonderlijke service en het creëren van een warme, gastvrije omgeving voor alle klanten.",
    ownerBio_en: "Na3mat brings over 15 years of experience in the hair industry. With a keen eye for detail and a passion for creating looks that enhance each client's natural beauty, Na3mat has built a reputation for excellence and innovation. As the owner of Kapsalon Stars, Na3mat is dedicated to providing exceptional service and creating a warm, welcoming environment for all clients.",
    ourTeam_nl: "Ons Team",
    ourTeam_en: "Our Team",
    teamMember1Name_nl: "Adli",
    teamMember1Name_en: "Adli",
    teamMember1Title_nl: "Senior Stylist",
    teamMember1Title_en: "Senior Stylist",
    teamMember1Bio_nl: "Adli is gespecialiseerd in moderne kniptechnieken en is een expert in het creëren van stijlvolle, onderhoudsvriendelijke looks. Met 8 jaar ervaring in de branche, brengt Adli creativiteit en precisie naar elke afspraak.",
    teamMember1Bio_en: "Adli specializes in modern cutting techniques and is an expert at creating stylish, low-maintenance looks. With 8 years in the industry, Adli brings creativity and precision to every appointment.",
    teamMember2Name_nl: "Hasko",
    teamMember2Name_en: "Hasko",
    teamMember2Title_nl: "Kleurspecialist",
    teamMember2Title_en: "Color Specialist",
    teamMember2Bio_nl: "Hasko is onze kleurexpert met een passie voor het creëren van levendige, gepersonaliseerde kleurbehandelingen. Gespecialiseerd in balayage en highlights, helpt Hasko klanten om hun perfecte look te vinden.",
    teamMember2Bio_en: "Hasko is our color expert with a passion for creating vibrant, personalized color treatments. Specializing in balayage and highlights, Hasko helps clients find their perfect look.",
    ourValues_nl: "Onze Waarden",
    ourValues_en: "Our Values",
    quality_nl: "Kwaliteit",
    quality_en: "Quality",
    qualityDesc_nl: "We gebruiken alleen hoogwaardige producten en blijven op de hoogte van de nieuwste technieken om de beste resultaten te garanderen.",
    qualityDesc_en: "We use only high-quality products and stay updated with the latest techniques to ensure the best results.",
    creativity_nl: "Creativiteit",
    creativity_en: "Creativity",
    creativityDesc_nl: "We benaderen elk kapsel als een uniek kunstwerk, aangepast aan de persoonlijkheid en levensstijl van de klant.",
    creativityDesc_en: "We approach each hairstyle as a unique work of art, tailored to the client's personality and lifestyle.",
    satisfaction_nl: "Tevredenheid",
    satisfaction_en: "Satisfaction",
    satisfactionDesc_nl: "De tevredenheid van onze klanten staat centraal in alles wat we doen. We streven ernaar om verwachtingen te overtreffen.",
    satisfactionDesc_en: "Our clients' satisfaction is at the heart of everything we do. We strive to exceed expectations.",
    bookAppointment_nl: "Maak een Afspraak",
    bookAppointment_en: "Book an Appointment",
  }

  const values = [
    {
      title: t("quality", translations),
      description: t("qualityDesc", translations),
    },
    {
      title: t("creativity", translations),
      description: t("creativityDesc", translations),
    },
    {
      title: t("satisfaction", translations),
      description: t("satisfactionDesc", translations),
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
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">{t("aboutUs", translations)}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("aboutDescription", translations)}
          </p>
        </div>
      </FadeIn>

      {/* Our Story Section */}
      <SlideUp>
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{t("ourStory", translations)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                {t("storyContent", translations)}
              </p>
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <img
                src="/salon-interior.jpg"
                alt="Kapsalon Stars salon interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SlideUp>

      {/* Meet the Owner Section */}
      <SlideUp delay={0.1}>
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">{t("meetOwner", translations)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t("ownerName", translations)}</h3>
              <p className="text-gray-500 mb-4">{t("ownerTitle", translations)}</p>
              <p className="text-gray-600">
                {t("ownerBio", translations)}
              </p>
            </div>
            <div className="md:order-1 relative h-72 sm:h-96 rounded-lg overflow-hidden">
              <img
                src="/team/na3mat.jpeg"
                alt="Na3mat - Owner & Head Stylist"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
        </div>
      </SlideUp>

      {/* Our Team Section */}
      <SlideUp delay={0.2}>
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">{t("ourTeam", translations)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="relative h-56 sm:h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src="/team/adli.jpeg"
                  alt="Adli - Senior Stylist"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t("teamMember1Name", translations)}</h3>
              <p className="text-gray-500 mb-3">{t("teamMember1Title", translations)}</p>
              <p className="text-gray-600 text-sm sm:text-base">
                {t("teamMember1Bio", translations)}
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="relative h-56 sm:h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src="/team/hasko.jpeg"
                  alt="Hasko - Color Specialist"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t("teamMember2Name", translations)}</h3>
              <p className="text-gray-500 mb-3">{t("teamMember2Title", translations)}</p>
              <p className="text-gray-600 text-sm sm:text-base">
                {t("teamMember2Bio", translations)}
              </p>
            </div>
          </div>
        </div>
      </SlideUp>

      {/* Our Values Section */}
      <SlideUp delay={0.3}>
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">{t("ourValues", translations)}</h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg h-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SlideUp>

      <div className="text-center">
        <Link
          href="/booking"
          className="inline-block bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-colors"
        >
          {t("bookAppointment", translations)}
        </Link>
      </div>
    </div>
  )
}

