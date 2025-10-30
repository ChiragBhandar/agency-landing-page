# Code&Canvas - Agency Landing Page

A modern, fully responsive web development agency landing page built with Next.js 16 and cutting-edge web technologies. Features stunning animations, smooth scrolling, and an elegant user interface designed to showcase agency services and attract clients.

![Code&Canvas](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- **Modern UI/UX Design** - Clean, professional, and visually appealing interface
- **Smooth Animations** - Advanced animations powered by GSAP and Framer Motion
- **Responsive Design** - Fully optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Scrolling** - Implemented with Lenis for buttery-smooth scroll experience
- **Interactive Components** - Dynamic testimonial slider using Swiper.js
- **Performance Optimized** - Built with Next.js 16 for optimal loading speeds
- **SEO Ready** - Proper meta tags and semantic HTML structure
- **Modern Typography** - Using Google Fonts (Geist Sans & Geist Mono)

## 🎯 Sections

1. **Hero Section** - Eye-catching landing area with animated elements
2. **About** - Introduction to the agency and its mission
3. **Flow of Work** - Visual representation of the work process
4. **Services** - Showcase of offered services
5. **Testimonials** - Client reviews with interactive slider
6. **Contact** - Contact form and information
7. **Footer** - Site navigation and additional links

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.1** - React framework for production
- **React 19.2.0** - JavaScript library for building user interfaces
- **React DOM 19.2.0** - React package for working with the DOM

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - Tool for transforming CSS with JavaScript

### Animations & Interactions
- **GSAP 3.13.0** - Professional-grade JavaScript animation library
- **Framer Motion 12.23.24** - Production-ready motion library for React
- **Lenis 1.3.13** - Smooth scroll library
- **Swiper 12.0.3** - Modern mobile touch slider

### Icons & UI Elements
- **Lucide React 0.548.0** - Beautiful & consistent icon toolkit
- **React Icons 5.5.0** - Popular icons in your React projects

### Development Tools
- **ESLint 9** - Linting utility for JavaScript and JSX
- **ESLint Config Next** - ESLint configuration for Next.js projects

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agency-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server
- `npm run lint` - Runs ESLint to check for code quality issues

## 📁 Project Structure

```
agency-landing-page/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page
├── components/
│   ├── About.js             # About section component
│   ├── Contact.js           # Contact section component
│   ├── FlowOfWork.js        # Work process component
│   ├── Footer.js            # Footer component
│   ├── Hero.js              # Hero section component
│   ├── Navbar.js            # Navigation bar component
│   ├── Services.js          # Services section component
│   └── Testimonials.js      # Testimonials slider component
├── lib/
│   └── utils.js             # Utility functions
├── public/
│   └── images/              # Static images
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

## 🎨 Customization

### Updating Content

- **Metadata**: Edit `app/layout.js` to update the site title and description
- **Components**: Modify individual component files in the `components/` directory
- **Styles**: Update global styles in `app/globals.css`
- **Images**: Add your images to the `public/images/` directory

### Tailwind Configuration

The project uses Tailwind CSS v4. Customize styles by modifying utility classes directly in your components or extending the configuration.

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

This Next.js application can also be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted servers

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions.

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

Built with ❤️ by Chirag

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- GSAP and Framer Motion for powerful animation libraries
- All open-source contributors

---

**Note**: This is a custom landing page for a web development agency. Feel free to customize it according to your needs.
