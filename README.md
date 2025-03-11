# Dave Ejezie Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-15.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

A modern, responsive portfolio website for showcasing my work as a Full-Stack Web Developer. Built with Next.js, TypeScript, and Tailwind CSS, optimized for performance, and designed with SEO in mind.

## ✨ Features

- **Responsive Design**: Mobile-first approach with optimizations for 4 different screen sizes
- **Dark/Light Mode**: Automatic theme detection with toggle functionality
- **Interactive Components**: Smooth animations and interactive UI elements
- **Contact Form**: Fully functional contact form with email integration
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter card configurations
- **Projects Showcase**: Feature-rich projects display with expandable descriptions
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **Vercel Analytics**: Built-in analytics for tracking visitor engagement

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS animations and [Motion](https://motion.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📊 Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   │   ├── about/      # About page
│   │   ├── api/        # API routes
│   │   ├── contact/    # Contact page
│   │   ├── projects/   # Projects page
│   │   └── home/       # Home page
│   ├── assets/         # Project data
│   ├── components/     # Reusable components
│   │   ├── header.tsx  # Responsive header with burger menu
│   │   ├── hero.tsx    # Hero component
│   │   ├── footer.tsx  # Footer component
│   │   └── ...         # Other components
│   ├── fancy/          # Special effect components
│   └── ...
└── ...
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Email service configuration
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   EMAIL_TO=recipient-email@example.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌐 Deployment

This project is designed to be deployed on [Vercel](https://vercel.com/). To deploy:

1. Push your repository to GitHub
2. Import your project in Vercel
3. Configure environment variables
4. Deploy!

## 🔍 SEO Optimization

This portfolio website is optimized for search engines with:

- Semantic HTML structure
- Optimized metadata for each page
- OpenGraph and Twitter card configurations
- Responsive design (mobile-friendly)
- Fast loading times
- Site analytics integration

## 📱 Responsive Design

The website is designed with a mobile-first approach and is optimized for:
- Small mobile devices
- Larger mobile devices/tablets
- Desktop devices
- Large desktop screens

## 🧩 Components

- **Header**: Responsive navigation with burger menu for mobile
- **Hero**: Engaging introduction with typewriter effect
- **Projects**: Interactive project showcases with expandable descriptions
- **Contact Form**: Functional form with email integration
- **Theme Toggle**: Light/dark mode switching with system preference detection
- **Mouse Animation**: Interactive cursor effects

## 📧 Contact Form

The contact form is powered by Nodemailer and Next.js API routes. It includes:
- Input validation
- Error handling
- Email formatting
- SMTP integration

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Platform](https://vercel.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License.

---

Designed & Developed with ❤️ by Dave Ejezie