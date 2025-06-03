import defaultTemplate from '~/templates/Default'
import electronicsTemplate from '~/templates/Electronics'
import fashionTemplate from '~/templates/Fashion'
import foodTemplate from '~/templates/Food'

class TemplateRegistry {
  private templates: Map<TTemplate, TTemplateConfig> = new Map()

  constructor() {
    // Register default template
    this.register(defaultTemplate)

    // Register electronics template
    this.register(electronicsTemplate)

    // Register fashion template
    this.register(fashionTemplate)

    // Register food template
    this.register(foodTemplate)

    // TODO: Register other templates as they are created
    // this.register(foodTemplate)
    // this.register(beautyTemplate)
    // etc.
  }

  register(template: TTemplateConfig) {
    this.templates.set(template.name, template)
  }

  get(templateName: TTemplate): TTemplateConfig | undefined {
    return this.templates.get(templateName)
  }

  getAll(): TTemplateConfig[] {
    return Array.from(this.templates.values())
  }

  getAllNames(): TTemplate[] {
    return Array.from(this.templates.keys())
  }

  exists(templateName: TTemplate): boolean {
    return this.templates.has(templateName)
  }
}

// Export singleton instance
export const templateRegistry = new TemplateRegistry()

// Helper function to get current template from cookies
export function getCurrentTemplate(): TTemplate {
  if (typeof window !== 'undefined') {
    // Client side
    const template = document.cookie
      .split('; ')
      .find((row) => row.startsWith('current-template='))
      ?.split('=')[1] as TTemplate

    return template && templateRegistry.exists(template) ? template : 'DEFAULT'
  }

  // Server side - will be handled by middleware
  return 'DEFAULT'
}

// Helper function to get template config
export function getTemplateConfig(templateName?: TTemplate): TTemplateConfig {
  const name = templateName || getCurrentTemplate()
  const config = templateRegistry.get(name)

  if (!config) {
    // Fallback to default template
    return templateRegistry.get('DEFAULT')!
  }

  return config
}
