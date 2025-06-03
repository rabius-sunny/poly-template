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
- **Real-time Template Switching**: Switch themes instantly via UI or URL
- **Cookie-based Persistence**: Your template choice is remembered
- **Server-side Rendering**: Optimal performance with SSR
- **Independent Layouts**: Each template controls its own Header/Footer arrangement
- **TypeScript**: Full type safety throughout the application

## 🎨 Available Templates

- **Default**: Clean minimal design (gray theme)
- **Electronics**: Tech-focused with floating support button (blue theme)
- **Fashion**: Elegant with newsletter signup section (pink theme)
- **Food**: Warm design with promotional banner (orange theme)

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
└── pages/             # Template-specific page components
```

## 🔄 Template Switching

Switch templates in multiple ways:

- **UI Component**: Use the template switcher in the header
- **URL Parameter**: Add `?template=TEMPLATE_NAME` to any URL
- **API**: POST to `/api/get-current-template` with template name

## 📖 Detailed Documentation

For comprehensive documentation, architecture details, and development guide, see [TEMPLATE_SYSTEM_README.md](./TEMPLATE_SYSTEM_README.md).

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/poly-templates)

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
