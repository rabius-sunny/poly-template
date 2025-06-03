import React from 'react'
import { getCurrentTemplateConfig } from '~/lib/serverTemplateUtils'

interface TemplateLayoutProps {
  children: React.ReactNode
}

export default async function TemplateLayout({ children }: TemplateLayoutProps) {
  const templateConfig = await getCurrentTemplateConfig()

  if (!templateConfig) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>Template not found</h1>
          <p className='text-gray-600'>Unable to load template configuration</p>
        </div>
      </div>
    )
  }

  // Dynamically import the template's layout component
  const templateName = templateConfig.name.toLowerCase()

  try {
    const TemplateLayoutComponent = await import(
      `~/templates/${templateName.charAt(0).toUpperCase() + templateName.slice(1)}/layout`
    )
    const Layout = TemplateLayoutComponent.default

    return <Layout template={templateConfig}>{children}</Layout>
  } catch {
    // Failed to load template layout
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>Layout not found</h1>
          <p className='text-gray-600'>Unable to load layout for {templateConfig.name} template</p>
        </div>
      </div>
    )
  }
}
