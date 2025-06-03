# Multi-Template Application

A sophisticated Next.js application featuring a dynamic template switching system that allows users to experience different UI themes and layouts in real-time. Each template has complete control over its layout composition, making it highly flexible and maintainable.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✨ Features

- **4 Unique Templates**: Default, Electronics, Fashion, and Food themes
- **Comprehensive Products Pages**: Each template has its own product catalog with real data
- **Real-time Template Switching**: Switch themes instantly via UI or URL (production-ready)
- **Cookie-based Persistence**: Your template choice is remembered across sessions
- **Server-side Rendering**: Optimal performance with SSR
- **Independent Layouts**: Each template controls its own Header/Footer arrangement
- **Next.js Image Optimization**: All images use Next.js Image components for performance
- **TypeScript**: Full type safety throughout the application
- **Production Deployment Ready**: Optimized for Netlify and Vercel deployment

## 🎨 Available Templates

- **Default**: Clean minimal design with lifestyle products (gray theme)
- **Electronics**: Tech-focused with electronics catalog and specs display (blue theme)
- **Fashion**: Elegant with fashion items, sizes, and colors (pink theme)
- **Food**: Warm design with restaurant menu and ingredients (orange theme)

## 🔧 Development Commands

```bash
bun dev          # Start development server
bun build        # Build for production
bun start        # Start production server
bun run lint     # Run ESLint
bun run check    # Run TypeScript type checking
```

## 🏗️ Architecture Overview

### Core Concept

Each template has its own `layout.tsx` file that independently chooses which layout components (Header, Footer, etc.) to use and how to arrange them, rather than using a centralized layout wrapper.

### Key Components

- **TemplateLayout**: Dynamically imports and renders each template's layout
- **TemplateRenderer**: Handles page-specific component rendering
- **Template Registry**: Centralized template management system
- **Middleware**: Cookie-based template switching and persistence

### Template Structure

```
src/templates/[TemplateName]/
├── index.tsx           # Template configuration
├── layout.tsx          # Independent layout with Header/Footer
├── components/         # Template-specific components
│   ├── Header.tsx      # Template-specific header with navigation
│   └── Footer.tsx      # Template-specific footer
└── pages/             # Template-specific page components
    ├── home/          # Homepage components (Banner, etc.)
    └── products/      # Template-specific products page
```

## 🔄 Template Switching

Switch templates in multiple ways:

- **UI Component**: Use the template switcher in the header
- **URL Parameter**: Add `?template=TEMPLATE_NAME` to any URL (production-ready)
- **Direct Navigation**: Click "Products" to explore template-specific catalogs

### Production Deployment Notes

The template switching system has been optimized for production deployment with:
- **Cookie Configuration**: Production-friendly settings with proper `sameSite` and `secure` flags
- **URL Parameter Switching**: Reliable template switching using URL parameters for deployment environments
- **Session Persistence**: Template choices persist across browser sessions with 1-year cookie expiration

## 📖 Detailed Documentation

For comprehensive documentation, architecture details, and development guide, see [TEMPLATE_SYSTEM_README.md](./TEMPLATE_SYSTEM_README.md).

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/poly-templates)

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
