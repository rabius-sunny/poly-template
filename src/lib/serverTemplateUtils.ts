import { headers } from 'next/headers'
import { templateRegistry } from './templateRegistry'

export async function getCurrentTemplateServer(): Promise<TTemplate> {
  const headersList = await headers()
  const template = headersList.get('x-current-template') as TTemplate

  if (template && templateRegistry.exists(template)) {
    return template
  }

  return 'DEFAULT'
}

export async function getCurrentTemplateConfig() {
  const currentTemplate = await getCurrentTemplateServer()
  return templateRegistry.get(currentTemplate)!
}
