import { NextResponse } from "next/server"

// Simple in-memory database for demonstration
// In production, use a real database like MongoDB, PostgreSQL, etc.
const bookings: any[] = []
const discountCodes: { [key: string]: { used: boolean; email: string; discount: number } } = {
  WELCOME15: { used: false, email: "", discount: 15 },
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

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
      id: data.bookingReference,
      ...data,
      discountApplied,
      discountAmount,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)

    return NextResponse.json({
      success: true,
      message: "Afspraak succesvol aangevraagd",
      bookingReference: data.bookingReference,
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

