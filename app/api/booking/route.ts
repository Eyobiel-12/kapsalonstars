import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// This would be replaced with your actual email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "your-email@example.com",
    pass: process.env.EMAIL_PASSWORD || "your-password",
  },
})

// Simple in-memory database for demonstration
// In production, use a real database like MongoDB, PostgreSQL, etc.
const bookings: any[] = []
const discountCodes: { [key: string]: { used: boolean; email: string; discount: number } } = {
  WELCOME15: { used: false, email: "", discount: 15 },
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Generate a unique booking reference
    const bookingReference = `KAP${Date.now()}`

    // Check if discount code is valid
    let discountApplied = false
    let discountAmount = 0

    if (data.discountCode) {
      const code = data.discountCode.toUpperCase()
      if (discountCodes[code] && !discountCodes[code].used) {
        discountApplied = true
        discountAmount = discountCodes[code].discount

        // In a real app, you'd mark this as used for this customer
        // discountCodes[code].used = true;
        // discountCodes[code].email = data.email;
      }
    }

    // Store booking in our "database"
    const booking = {
      id: bookingReference,
      ...data,
      discountApplied,
      discountAmount,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)

    // Send email to salon
    const salonEmailContent = `
      Nieuwe afspraak aanvraag:
      
      Referentie: ${bookingReference}
      Naam: ${data.name}
      E-mail: ${data.email}
      Telefoon: ${data.phone}
      Datum: ${data.date}
      Tijd: ${data.time}
      Dienst: ${data.service}
      Stylist: ${data.stylist || "Geen voorkeur"}
      Opmerkingen: ${data.notes || "Geen"}
      
      Kortingscode toegepast: ${discountApplied ? "Ja, " + discountAmount + "%" : "Nee"}
    `

    // Send confirmation email to customer
    const customerEmailContent = `
      Beste ${data.name},
      
      Bedankt voor je afspraak bij Kapsalons!
      
      Afspraakdetails:
      Referentie: ${bookingReference}
      Datum: ${data.date}
      Tijd: ${data.time}
      Dienst: ${data.service}
      ${data.stylist ? `Stylist: ${data.stylist}` : ""}
      
      ${discountApplied ? `Je kortingscode ${data.discountCode} is toegepast voor ${discountAmount}% korting.` : ""}
      
      We hebben je aanvraag ontvangen en zullen deze zo snel mogelijk bevestigen.
      
      Met vriendelijke groet,
      Het Kapsalons Team
    `

    // In a production environment, uncomment these to send actual emails
    /*
    await transporter.sendMail({
      from: '"Kapsalons Booking" <bookings@kapsalons.com>',
      to: 'info@kapsalons.com',
      subject: `Nieuwe afspraak: ${bookingReference}`,
      text: salonEmailContent,
    });
    
    await transporter.sendMail({
      from: '"Kapsalons" <bookings@kapsalons.com>',
      to: data.email,
      subject: 'Afspraakbevestiging - Kapsalons',
      text: customerEmailContent,
    });
    */

    return NextResponse.json({
      success: true,
      message: "Afspraak succesvol aangevraagd",
      bookingReference,
      discountApplied,
      discountAmount,
      ...data,
    })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden bij het verwerken van je aanvraag" },
      { status: 500 },
    )
  }
}

// Endpoint to validate discount code
export async function GET(req: Request) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return NextResponse.json({ valid: false, message: "Geen kortingscode opgegeven" }, { status: 400 })
  }

  const upperCode = code.toUpperCase()
  if (discountCodes[upperCode] && !discountCodes[upperCode].used) {
    return NextResponse.json({
      valid: true,
      discount: discountCodes[upperCode].discount,
      message: `${discountCodes[upperCode].discount}% korting toegepast`,
    })
  }

  return NextResponse.json({
    valid: false,
    message: "Ongeldige kortingscode of al gebruikt",
  })
}

