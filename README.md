# Dr. Sol Portfolio Website

A modern, professional medical portfolio website for Dr. Harper Montgomery built with Next.js 16, React 19, and Tailwind CSS.

![Portfolio Website](./assets/images/sol1.jpg)

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Static generation with Next.js for optimal speed
- **SEO Ready** - Semantic HTML and proper structure for search engines
- **Accessible** - Built with accessibility best practices
- **Professional Sections**:
  - Hero section with call-to-action
  - Statistics showcase
  - About section
  - Services offered
  - Patient testimonials
  - Contact form
  - Professional footer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (or npm/yarn)

### Installation

1. Clone or navigate to the project directory:
```bash
cd DrSol_Portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Start Production Server

```bash
pnpm start
# or
npm start
```

### Deploy

This project can be deployed to:
- **Vercel** (recommended) - One-click deployment
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- Any static hosting provider

#### Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Project Structure

```
DrSol_Portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout
│   └── page.jsx            # Home page
├── components/
│   ├── about-section.jsx
│   ├── contact-form.jsx
│   ├── cta-section.jsx
│   ├── footer.jsx
│   ├── header.jsx
│   ├── hero-section.jsx
│   ├── services-section.jsx
│   ├── stats-section.jsx
│   ├── testimonials-section.jsx
│   └── ui/
│       └── button.jsx
├── assets/
│   └── images/             # Image assets
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static files
```

## 🎨 Customization

### Colors

The primary color scheme can be modified in `app/globals.css`:

```css
--primary: #003d7a;        /* Primary blue */
--accent: #0052a3;         /* Accent blue */
```

### Content

Edit content in individual component files:
- **Hero Text**: `components/hero-section.jsx`
- **About Content**: `components/about-section.jsx`
- **Services**: `components/services-section.jsx`
- **Testimonials**: `components/testimonials-section.jsx`
- **Contact Info**: `components/contact-form.jsx`

### Images

Replace images in `assets/images/`:
- `sol1.jpg` - Hero section doctor image
- `sol2.jpg` - About section doctor image

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **React**: 19
- **Styling**: Tailwind CSS 4.2.0
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **TypeScript**: 5.7.3

## 📋 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 🎯 Key Sections

### Header
- Sticky navigation
- Mobile-responsive menu
- Book appointment CTA

### Hero Section
- Eye-catching headline
- Professional doctor image
- Years of experience badge
- Personal quote

### Stats Section
- 1,200+ Successful Patients
- 99% Patient Satisfaction
- 99% Recovery Success Rate
- 500+ Hours of Education

### Services
- Chronic Disease Management
- Preventive Care
- Women's Health
- Pediatric Care
- Mental Health
- Weight Management

### Testimonials
- Real patient reviews
- 5-star ratings
- Social proof

### Contact Form
- Name, Email, Phone fields
- Appointment booking
- Contact information display

## 🔧 Configuration

### Next.js Config
Configuration is in `next.config.mjs`

### Tailwind Config
Tailwind settings are in `postcss.config.mjs`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is private and proprietary.

## 👨‍⚕️ About Dr. Montgomery

Dr. Harper Montgomery is a board-certified General Practitioner with over a decade of experience in family medicine, providing compassionate, comprehensive care for patients and their families.

## 📞 Contact

- **Phone**: (555) 123-4567
- **Email**: hello@drmontgomery.com
- **Address**: 123 Wellness Way, Suite 500, Boston, MA 02115

---

Built with ❤️ using Next.js and modern web technologies
