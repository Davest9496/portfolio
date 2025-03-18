# Dave Ejezie - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design (mobile-first approach)
- Dark/Light mode toggle
- SEO optimized
- Progressive Web App (PWA) support
- Optimized performance
- Contact form with nodemailer integration
- Projects showcase
- Animated UI elements

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Nodemailer](https://nodemailer.com/) - Module for email sending
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights) - Performance metrics

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Generate PWA icons:
   ```bash
   npm run generate-icons
   # or
   yarn generate-icons
   ```

4. Create a `.env.local` file in the root directory with the following variables:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-email-password
   SMTP_SECURE=false
   EMAIL_TO=recipient-email@example.com
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## PWA Setup

This project is configured as a Progressive Web App (PWA), which allows users to install it on their devices. The PWA setup includes:

- A web manifest file (`public/manifest.json`)
- Service worker for offline support (`public/sw.js`)
- Various sized icons for different devices
- Theme color configuration

To customize the PWA setup, modify the following files:

- `public/manifest.json` - App metadata and icons
- `public/sw.js` - Service worker logic for caching and offline support
- `src/components/service-worker-registration.tsx` - Service worker registration

## Deployment

This website is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

Make sure to add the environment variables from the `.env.local` file to your Vercel project settings.

## SEO Optimization

The website is optimized for search engines with:

- Semantic HTML
- Metadata for each page
- Proper heading hierarchy
- Descriptive alt text for images
- Open Graph and Twitter card metadata
- Structured data where appropriate

## Performance Optimization

- Code splitting and lazy loading
- Image optimization
- Font optimization
- Cache control for static assets
- Minification and compression

## License

This project is licensed under the MIT License.