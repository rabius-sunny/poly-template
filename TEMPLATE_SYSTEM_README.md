# Multi-Template Application System

A Next.js 15 application featuring a sophisticated dynamic template switching system. Each template has complete autonomy over its layout composition, allowing for highly customizable and maintainable theme experiences.

## 🚀 Key Features

- **Independent Template Layouts**: Each template controls its own Header/Footer arrangement
- **Real-time Template Switching**: Instant theme changes via UI or URL parameters
- **Server-Side Rendering**: Full SSR support with async components
- **Cookie-Based Persistence**: Template selection survives page reloads and sessions
- **Type-Safe Architecture**: Comprehensive TypeScript coverage
- **Modular Design**: Easy template addition with consistent patterns
- **Responsive Design**: All templates are mobile-first and fully responsive

## 🏗️ Architecture Deep Dive

### Core Innovation: Independent Template Layouts

Unlike traditional theme systems that use centralized layout wrappers, this system allows each template to have its own `layout.tsx` file that:

- Independently chooses which components to render (Header, Footer, etc.)
- Controls the arrangement and styling of layout elements
- Implements template-specific customizations (banners, floating buttons, etc.)
- Maintains complete autonomy over the user experience

### System Components

1. **TemplateLayout** (`src/components/TemplateLayout.tsx`)

   - Dynamically imports the current template's layout component
   - Passes template configuration as props
   - Handles loading states and error boundaries

2. **TemplateRenderer** (`src/components/TemplateRenderer.tsx`)

   - Renders page-specific components based on current template and pathname
   - Manages component resolution and loading

3. **Template Registry** (`src/lib/templateRegistry.ts`)

   - Singleton pattern for centralized template management
   - Type-safe template registration and retrieval
   - Validates template configurations

4. **Server Utils** (`src/lib/serverTemplateUtils.ts`)

   - Server-side template resolution from cookies
   - Handles template validation and fallbacks

5. **Middleware** (`src/middleware.ts`)
   - Intercepts requests for template switching
   - Manages cookie-based persistence
   - Handles URL parameter processing

## 🎨 Template Showcase

### 1. Default Template

- **Theme**: Clean, professional gray palette
- **Layout**: Standard Header → Main → Footer structure
- **Use Case**: General-purpose, corporate websites
- **Special Features**: Minimalist design philosophy

### 2. Electronics Template

- **Theme**: Tech-focused blue and electric colors
- **Layout**: Header → Main → Floating Support Button → Footer
- **Use Case**: Electronics stores, tech companies
- **Special Features**: Floating technical support button with ⚡ icon

### 3. Fashion Template

- **Theme**: Elegant pink and rose color scheme
- **Layout**: Header → Main → Newsletter Section → Footer
- **Use Case**: Fashion brands, lifestyle websites
- **Special Features**: Newsletter signup section with gradient background above footer

### 4. Food Template

- **Theme**: Warm orange and red appetizing colors
- **Layout**: Promotional Banner → Header → Main → Footer
- **Use Case**: Restaurants, food delivery, culinary blogs
- **Special Features**: Top promotional banner with delivery offers and food emojis

## 🔧 Technical Implementation Details

### Template Configuration Structure

Each template exports a comprehensive configuration:

```typescript
const templateConfig: TTemplateConfig = {
  name: 'TEMPLATE_NAME',
  layout: {
    Header: HeaderComponent,
    Footer: FooterComponent
  },
  pages: {
    '/': [BannerComponent /* other home components */],
    '/products': [ProductsPageComponent]
  },
  config: {
    theme: {
      primary: '#color',
      secondary: '#color',
      accent: '#color'
    },
    features: {
      newsletter: boolean,
      chat: boolean,
      promotionalBanner: boolean
    },
    branding: {
      logo: 'path/to/logo',
      siteName: 'Site Name',
      tagline: 'Site Tagline'
    }
  }
}
```

### Layout Component Pattern

Each template's `layout.tsx` receives the template configuration and renders:

```typescript
export default function TemplateLayout({
  children,
  template
}: {
  children: React.ReactNode
  template: TTemplateConfig
}) {
  const { Header, Footer } = template.layout

  return (
    <div className='template-layout'>
      {/* Template-specific customizations */}
      <Header />
      <main>{children}</main>
      {/* Template-specific additions */}
      <Footer />
    </div>
  )
}
```

### API Routes

- **`GET /api/get-all-templates`** - Returns all available templates with metadata
- **`GET /api/get-current-template`** - Returns current active template from cookies
- **`POST /api/get-current-template`** - Sets new template selection and updates cookies

### Template Switching Flow

1. **URL Parameter Detection**: Middleware checks for `?template=TEMPLATE_NAME`
2. **Cookie Validation**: Verifies template exists in registry
3. **Server Resolution**: `serverTemplateUtils` resolves current template server-side
4. **Dynamic Rendering**: `TemplateLayout` dynamically imports appropriate layout
5. **Component Resolution**: `TemplateRenderer` resolves page-specific components

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18+ (recommended: latest LTS)
- **Package Manager**: bun (default), npm, or yarn
- **TypeScript**: 5+ (included in devDependencies)

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd poly-templates

# Install dependencies (using bun - default)
bun install

# Start development server
bun dev

# Alternative package managers
# npm install && npm run dev
# yarn install && yarn dev
```

### Development Commands

```bash
bun dev          # Start development server (with Turbopack)
bun build        # Build for production
bun start        # Start production server
bun run lint     # Run ESLint checks
bun run check    # Run TypeScript type checking
```

## 🔧 Adding New Templates

### Step-by-Step Guide

1. **Create Directory Structure**

   ```bash
   mkdir -p src/templates/YourTemplate/{components,pages/home}
   ```

2. **Create Core Files**

   **`src/templates/YourTemplate/index.tsx`**

   ```typescript
   import type { TTemplateConfig } from '~/lib/templateRegistry'
   import YourTemplateLayout from './layout'
   import YourTemplateHeader from './components/YourTemplateHeader'
   import YourTemplateFooter from './components/YourTemplateFooter'
   import YourTemplateBanner from './pages/home/YourTemplateBanner'

   const templateConfig: TTemplateConfig = {
     name: 'YOUR_TEMPLATE',
     layout: {
       Header: YourTemplateHeader,
       Footer: YourTemplateFooter
     },
     pages: {
       '/': [YourTemplateBanner],
       '/products': [] // Add products page components
     },
     config: {
       theme: {
         primary: '#your-color',
         secondary: '#your-color',
         accent: '#your-color'
       },
       features: {
         // Your template features
       },
       branding: {
         siteName: 'Your Site',
         tagline: 'Your Tagline'
       }
     }
   }

   export default templateConfig
   ```

   **`src/templates/YourTemplate/layout.tsx`**

   ```typescript
   import type { TTemplateConfig } from '~/lib/templateRegistry'

   export default function YourTemplateLayout({
     children,
     template
   }: {
     children: React.ReactNode
     template: TTemplateConfig
   }) {
     const { Header, Footer } = template.layout

     return (
       <div className='your-template-layout'>
         {/* Your custom layout structure */}
         <Header />
         <main className='flex-1'>{children}</main>
         <Footer />
       </div>
     )
   }
   ```

3. **Create Components**

   - `components/YourTemplateHeader.tsx`
   - `components/YourTemplateFooter.tsx`
   - `pages/home/YourTemplateBanner.tsx`

4. **Register Template**

   **Update `src/lib/templateRegistry.ts`**

   ```typescript
   import yourTemplate from '~/templates/YourTemplate'

   // In TemplateRegistry constructor:
   this.register(yourTemplate)
   ```

5. **Add Type Definition**

   **Update `index.d.ts`**

   ```typescript
   type TTemplate = 'DEFAULT' | 'ELECTRONICS' | 'FASHION' | 'FOOD' | 'YOUR_TEMPLATE'
   ```

6. **Test Your Template**

   ```bash
   # Start dev server
   bun dev

   # Visit your template
   http://localhost:3000?template=YOUR_TEMPLATE
   ```

## 🎯 Template Switching Methods

### 1. Interactive UI Component

The template switcher component provides real-time switching:

- Located in the application header (all templates)
- Dropdown selection with immediate visual feedback
- Toast notifications for successful switches
- Automatic page refresh to apply new template

### 2. URL Parameter Method

Direct template access via URL parameters:

```bash
# Switch to specific templates
http://localhost:3000/?template=ELECTRONICS
http://localhost:3000/?template=FASHION
http://localhost:3000/?template=FOOD
http://localhost:3000/products?template=DEFAULT

# Parameters work on any page
http://localhost:3000/any-page?template=TEMPLATE_NAME
```

### 3. Programmatic API

Client-side template switching via API:

```typescript
// Switch template programmatically
const switchTemplate = async (templateName: string) => {
  const response = await fetch('/api/get-current-template', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ template: templateName })
  })

  if (response.ok) {
    window.location.reload() // Refresh to apply new template
  }
}

// Get current template
const getCurrentTemplate = async () => {
  const response = await fetch('/api/get-current-template')
  const data = await response.json()
  return data.currentTemplate
}

// Get all available templates
const getAllTemplates = async () => {
  const response = await fetch('/api/get-all-templates')
  const data = await response.json()
  return data.templates
}
```

## 🔒 Type Safety & Validation

### Comprehensive TypeScript Coverage

**Global Type Definitions** (`index.d.ts`):

```typescript
type TTemplate = 'DEFAULT' | 'ELECTRONICS' | 'FASHION' | 'FOOD'

type TTemplateConfig = {
  name: TTemplate
  layout: {
    Header: React.ComponentType<any>
    Footer: React.ComponentType<any>
  }
  pages: {
    [path: string]: React.ComponentType<any>[]
  }
  config: {
    theme: {
      primary: string
      secondary: string
      accent: string
    }
    features: Record<string, boolean>
    branding: {
      siteName?: string
      tagline?: string
      logo?: string
    }
  }
}
```

**Template Validation**:

- Runtime template existence checks
- Type-safe template registration
- Compile-time template name validation
- Component prop type checking

**Error Handling**:

- Graceful fallback to DEFAULT template
- Component loading error boundaries
- Server-side template resolution errors
- Client-side switching error handling

## 🎨 Styling & Theming

### Template-Specific Styling

Each template includes:

- **Custom Color Schemes**: Defined in template configuration
- **Unique Component Designs**: Template-specific Header/Footer styles
- **Layout Customizations**: Different arrangements and special elements
- **Responsive Breakpoints**: Mobile-first design principles

### Styling Technologies

- **Tailwind CSS 4**: Utility-first CSS framework
- **CSS Variables**: Dynamic color scheme application
- **Responsive Design**: Mobile-first breakpoints
- **Component Scoping**: Template-specific style isolation

### Template Customization Examples

**Fashion Template Newsletter Section**:

```jsx
{
  /* Above footer in Fashion template layout */
}
;<section className='bg-gradient-to-r from-pink-100 to-rose-100 py-12'>
  <div className='container mx-auto px-4 text-center'>
    <h3 className='text-2xl font-bold text-gray-800 mb-4'>Stay Fashion Forward</h3>
    <p className='text-gray-600 mb-6'>Subscribe to get the latest trends and exclusive offers</p>
    <div className='flex max-w-md mx-auto'>
      <input
        type='email'
        placeholder='Enter your email'
        className='flex-1 px-4 py-2 border border-pink-300 rounded-l-lg'
      />
      <button className='bg-pink-500 text-white px-6 py-2 rounded-r-lg'>Subscribe</button>
    </div>
  </div>
</section>
```

**Electronics Template Floating Button**:

```jsx
{
  /* Floating support button in Electronics template */
}
;<div className='fixed bottom-6 right-6 z-50'>
  <button className='bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors'>
    <span className='text-2xl'>⚡</span>
    <span className='sr-only'>Technical Support</span>
  </button>
</div>
```

## 🔄 Server-Side Rendering (SSR)

### SSR Implementation Details

**Template Resolution**: Templates are resolved server-side for optimal performance:

- Cookie-based template detection in middleware
- Server-side component resolution in `serverTemplateUtils`
- No client-side hydration issues
- SEO-friendly template switching

**Async Component Support**: All templates support async components:

```typescript
// Server-side async components
const AsyncBanner = async () => {
  const data = await fetchBannerData()
  return <BannerComponent data={data} />
}
```

**Performance Benefits**:

- Faster initial page loads
- Better SEO indexing
- Reduced client-side JavaScript
- Optimal Core Web Vitals scores

## 📦 Build & Deployment

### Development

```bash
bun dev          # Start development server with Turbopack
bun run lint     # Run ESLint checks
bun run check    # TypeScript type checking
```

### Production Build

```bash
bun build        # Build optimized production bundle
bun start        # Start production server
```

### Environment Configuration

**Development Environment**:

- Next.js 15 with Turbopack for fast development
- Hot module replacement for all templates
- Real-time template switching
- TypeScript strict mode enabled

**Production Optimizations**:

- Static generation where possible
- Dynamic imports for template code splitting
- Optimized bundle sizes per template
- Server-side template resolution

### Deployment Platforms

**Vercel (Recommended)**:

```bash
# Deploy directly to Vercel
vercel --prod
```

**Manual Deployment**:

```bash
# Build and export
bun build
bun start

# Or static export (if using static generation)
bun build && bun export
```

## 🧪 Testing & Quality Assurance

### Pre-deployment Checklist

- ✅ TypeScript compilation passes (`bun run check`)
- ✅ ESLint rules pass (`bun run lint`)
- ✅ All templates load correctly
- ✅ Template switching works via UI, URL, and API
- ✅ Cookie persistence functions properly
- ✅ Server-side rendering works for all templates
- ✅ Responsive design tested across devices
- ✅ Performance optimization verified

### Testing Commands

```bash
# Type checking
bun run check

# Linting
bun run lint

# Build verification
bun build

# Manual testing URLs
http://localhost:3000/?template=DEFAULT
http://localhost:3000/?template=ELECTRONICS
http://localhost:3000/?template=FASHION
http://localhost:3000/?template=FOOD
```

## 🤝 Contributing & Extending

### Development Guidelines

1. **Template Structure**: Follow the established directory pattern
2. **Type Safety**: Ensure all new components are properly typed
3. **Responsive Design**: Test on multiple screen sizes
4. **Performance**: Keep bundle sizes optimized
5. **Documentation**: Update docs when adding features

### Template Design Principles

- **Independence**: Each template should be self-contained
- **Consistency**: Follow established component patterns
- **Flexibility**: Allow for easy customization
- **Performance**: Optimize for fast loading
- **Accessibility**: Ensure WCAG compliance

### Code Quality Standards

- TypeScript strict mode compliance
- ESLint configuration adherence
- Consistent component naming patterns
- Proper error handling and fallbacks
- Comprehensive prop type definitions

## 🔍 Troubleshooting

### Common Issues

**Template Not Loading**:

- Verify template is registered in `templateRegistry.ts`
- Check template name in `index.d.ts` type definition
- Ensure all required components are exported

**Cookie Issues**:

- Check browser cookie settings
- Verify middleware configuration
- Test in incognito mode

**Build Errors**:

- Run `bun run check` for TypeScript errors
- Run `bun run lint` for style issues
- Check import/export statements

**Performance Issues**:

- Verify dynamic imports are working
- Check bundle analyzer for large dependencies
- Optimize images and assets

## 📊 Performance Metrics

### Optimizations Implemented

- **Code Splitting**: Each template is dynamically imported
- **Server-Side Rendering**: Templates resolved server-side
- **Static Assets**: Optimized images and fonts
- **Bundle Analysis**: Webpack bundle optimization
- **Caching**: Efficient cookie-based template caching

### Expected Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Template Switch Time**: < 500ms
- **Bundle Size**: ~150KB gzipped per template

## 📄 License & Credits

**License**: MIT License - Feel free to use this system in your projects!

**Built With**:

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager

**Template System Architecture**: Designed for maximum flexibility and maintainability in multi-theme applications.

---

**Built with ❤️ for developers who need sophisticated template systems**

_Last updated: June 2025_
