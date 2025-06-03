# Multi-Template Application System

A Next.js application featuring a dynamic template switching system that allows users to experience different UI themes and layouts in real-time.

## 🚀 Features

- **Dynamic Template Switching**: Switch between different templates without page reload
- **Server-Side Rendering**: All templates support SSR for optimal performance
- **Cookie-Based Persistence**: Template selection is remembered across sessions
- **Modular Architecture**: Easy to add new templates with consistent structure
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Responsive Design**: All templates are mobile-friendly

## 🏗️ Architecture

### Template Structure

Each template follows a consistent structure:

```
src/templates/[TemplateName]/
├── index.tsx           # Template configuration and export
├── layout.tsx          # Template-specific layout wrapper
├── components/
│   ├── Header.tsx      # Template header component
│   └── Footer.tsx      # Template footer component
└── pages/
    └── home/
        └── Banner.tsx  # Template-specific page components
```

### Core Components

1. **TemplateRegistry** (`src/lib/templateRegistry.ts`)

   - Singleton pattern for managing all available templates
   - Centralized template registration and retrieval

2. **Middleware** (`src/middleware.ts`)

   - Handles template switching via URL parameters
   - Manages cookie-based template persistence

3. **TemplateRenderer** (`src/components/TemplateRenderer.tsx`)

   - Dynamically renders components based on current template
   - Handles server-side template resolution

4. **Template Switcher** (`src/components/ui/templateSwitcher.tsx`)
   - UI component for template selection
   - Real-time template switching with toast notifications

## 🎨 Available Templates

### 1. Default Template

- Clean, minimal design
- Blue color scheme
- General-purpose layout

### 2. Electronics Template

- Tech-focused design with circuit patterns
- Blue and electric color scheme
- Perfect for electronics stores

### 3. Fashion Template

- Elegant and stylish design
- Pink and rose color scheme
- Fashion-forward layout

### 4. Food Template

- Warm, appetizing design
- Orange and red color scheme
- Food emojis and culinary theming

## 🔧 Technical Implementation

### Template Configuration

Each template exports a `TTemplateConfig` object:

```typescript
const templateConfig: TTemplateConfig = {
  name: 'TEMPLATE_NAME',
  layout: {
    Header: HeaderComponent,
    Footer: FooterComponent
  },
  pages: {
    '/': [
      /* page components */
    ],
    '/products': [
      /* page components */
    ]
  },
  config: {
    theme: {
      /* colors */
    },
    features: {
      /* enabled features */
    },
    branding: {
      /* brand settings */
    }
  }
}
```

### API Routes

- `GET /api/get-all-templates` - Returns all available templates
- `GET /api/get-current-template` - Returns current active template
- `POST /api/get-current-template` - Sets new template selection

### Middleware Integration

Template switching works through:

1. URL parameter detection (`?template=TEMPLATE_NAME`)
2. Cookie-based persistence
3. Server-side template resolution
4. Dynamic component rendering

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or bun (deafult: **bun**)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
bun install

# Start development server
bun run dev
```

### Adding New Templates

1. Create template directory structure:

```bash
mkdir -p src/templates/YourTemplate/{components,pages/home}
```

2. Create required components:

   - `index.tsx` - Template configuration
   - `layout.tsx` - Layout wrapper
   - `components/YourTemplateHeader.tsx`
   - `components/YourTemplateFooter.tsx`
   - `pages/home/YourTemplateBanner.tsx`

3. Register template in `src/lib/templateRegistry.ts`:

```typescript
import yourTemplate from '~/templates/YourTemplate'

// In constructor:
this.register(yourTemplate)
```

4. Add template name to type definitions in `index.d.ts`

## 📱 Usage

1. **Visit the application**: Navigate to `http://localhost:3000`
2. **Switch templates**: Use the template switcher in the header
3. **Persistent selection**: Your choice is saved and restored on reload
4. **URL switching**: Use `?template=TEMPLATE_NAME` for direct access

## 🎯 Template Switching Methods

### 1. UI Component

Use the template switcher component in the header for interactive switching.

### 2. URL Parameters

Direct template access via URL:

- `/?template=ELECTRONICS`
- `/?template=FASHION`
- `/?template=FOOD`

### 3. Programmatic

```typescript
// Client-side switching
await fetch('/api/get-current-template', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ template: 'ELECTRONICS' })
})
```

## 🔒 Type Safety

The system includes comprehensive TypeScript definitions:

- `TTemplate` - Union type of all template names
- `TTemplateConfig` - Template configuration interface
- Global type definitions in `index.d.ts`

## 🎨 Styling

Each template includes:

- Custom color schemes
- Unique component designs
- Responsive layouts
- Theme-specific styling

## 🔄 Server-Side Rendering

All templates support SSR:

- Template resolution happens server-side
- No hydration issues
- Optimal SEO and performance

## 📦 Build & Deployment

```bash
# Build for production
bun run build

# Start production server
bun start
```

## 🤝 Contributing

1. Follow the established template structure
2. Ensure type safety with TypeScript
3. Test template switching functionality
4. Update documentation for new features

## 📄 License

MIT License - feel free to use this system in your projects!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
