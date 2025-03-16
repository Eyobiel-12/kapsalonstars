# Kapsalons Hair Salon Website

A modern, responsive website for "Kapsalons" hair salon built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Bilingual interface (Dutch/English)
- Service showcase
- Gallery of work
- Pricing information
- Online booking system
- Contact information

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install --legacy-peer-deps
   ```
3. Run the development server:
   ```
   nvm use 18 && npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## EmailJS Setup for Booking System

The booking system uses EmailJS to send appointment requests directly to your email without requiring a backend database.

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account
2. Verify your account through the email you receive

### Step 2: Connect an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps

### Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your template with the following variables:
   - `{{booking_reference}}` - Unique booking reference
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{phone}}` - Customer's phone number
   - `{{date}}` - Requested date
   - `{{time}}` - Requested time
   - `{{service}}` - Selected service
   - `{{stylist}}` - Preferred stylist
   - `{{notes}}` - Additional notes
   - `{{discount_code}}` - Applied discount code

Example template:

```
Subject: New Booking Request: {{booking_reference}}

You have received a new booking request from the Kapsalons website.

Booking Reference: {{booking_reference}}
Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Date: {{date}}
Time: {{time}}
Service: {{service}}
Stylist: {{stylist}}
Notes: {{notes}}
Discount Code: {{discount_code}}

Please confirm this appointment with the customer.
```

### Step 4: Update the Website Configuration

1. Open `app/booking/page.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your EmailJS public key
   - Replace `YOUR_EMAILJS_SERVICE_ID` with your service ID
   - Replace `YOUR_EMAILJS_TEMPLATE_ID` with your template ID

```javascript
// Initialize EmailJS
useEffect(() => {
  emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
}, []);

// In the handleSubmit function:
const response = await emailjs.send(
  "YOUR_EMAILJS_SERVICE_ID",
  "YOUR_EMAILJS_TEMPLATE_ID",
  templateParams
);
```

### Step 5: Test the Booking System

1. Fill out the booking form on the website
2. Submit the form
3. Check your email to ensure you received the booking request

## License

This project is licensed under the MIT License. 