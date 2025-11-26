MadaTrips - Travel Agency Website

A modern, responsive travel agency website showcasing beautiful destinations in Romania and around the world. Built with React, TypeScript, and Tailwind CSS.

FEATURES

- Beautiful Destinations Showcase - Explore curated travel destinations with stunning imagery
- Photo Gallery - Interactive gallery with lightbox functionality
- Fully Responsive - Seamless experience across all devices
- Dark/Light Mode - Toggle between themes for comfortable viewing
- Modern UI/UX - Clean, intuitive design with smooth animations
- Contact Form - Get in touch with integrated email functionality
- AI Assistant - Interactive travel assistant for customer support
- Fast Performance - Optimized with Vite for lightning-fast load times
- SEO Ready - Includes sitemap and robots.txt for search engines

TECH STACK

Frontend:
- React 18 - Modern UI library
- TypeScript - Type-safe development
- Vite - Next-generation frontend tooling
- Tailwind CSS - Utility-first CSS framework
- Shadcn/ui - High-quality React components
- React Router - Client-side routing
- Lucide React - Beautiful icon library

Backend (Optional):
- Node.js - JavaScript runtime
- Express - Web framework
- Nodemailer - Email functionality
- CORS - Cross-origin resource sharing

Additional Tools:
- EmailJS - Email service integration
- Embla Carousel - Touch-friendly carousel
- React Hook Form - Form validation
- Zod - Schema validation
- TanStack Query - Data fetching and caching

PREREQUISITES

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

INSTALLATION

1. Clone the repository
   git clone https://github.com/madaiancu/madatrips-website.git
   cd madatrips-website

2. Install dependencies
   npm install

3. Install server dependencies (optional, for email functionality)
   cd server
   npm install
   cd ..

4. Configure environment variables (optional)
   - Copy server/env.example to server/config.env
   - Update with your email credentials

USAGE

Development Mode:

Run frontend only:
   npm run dev

The app will be available at http://localhost:8080

Run frontend + backend:
   npm run full:dev

Run backend only:
   npm run server:dev

Production Build:
   npm run build

Build output will be in the dist folder.

Preview Production Build:
   npm run preview

PROJECT STRUCTURE

madatrips-website/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── ui/         # Shadcn UI components
│   │   └── ...         # Custom components
│   ├── data/           # Data files (destinations, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── server/             # Backend server (optional)
│   ├── server.js       # Express server
│   ├── package.json    # Server dependencies
│   └── config.env      # Environment variables
├── public/             # Public static files
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── README.md          # This file

CUSTOMIZATION

Adding New Destinations:

Edit src/data/destinations.ts and add your destination object with image, title, description, price, duration, and activities.

Changing Colors:

Edit tailwind.config.ts to customize the color scheme.

Adding New Pages:

1. Create a new component in src/pages/
2. Add route in src/App.tsx

EMAIL CONFIGURATION

Two options are available:

Option 1: EmailJS (Recommended)
- Free and easy to set up
- No backend server required

Option 2: Custom Backend Server
- Uses Nodemailer
- See server/README.md for setup
- Configure server/config.env with your email credentials

FEATURES BREAKDOWN

Home Page:
- Hero section with search functionality
- Featured destinations carousel
- Quick stats and highlights

Destinations Page:
- Grid layout of all destinations
- Filter by type, price, duration
- Detailed destination cards with custom images

Gallery Page:
- Photo gallery with Romanian destinations
- Lightbox for full-size viewing
- Organized by destination type

About Page:
- Company information
- Team introduction
- Mission and values

Contact Page:
- Contact form with validation
- Company contact details
- Email integration

BROWSER SUPPORT

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)



AUTHOR

MadaIancu
GitHub: @madaiancu





Made with care by MadaIancu

