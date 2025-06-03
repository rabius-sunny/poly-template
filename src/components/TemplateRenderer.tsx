import { getCurrentTemplateConfig } from '~/lib/serverTemplateUtils'

type TProps = {
  pathname: string
}

export default async function TemplateRenderer({ pathname }: TProps) {
  const templateConfig = await getCurrentTemplateConfig()

  if (!templateConfig) {
    return <div>Template not found</div>
  }

  const { pages } = templateConfig

  // Get page configuration for current pathname
  const pageConfig = pages[pathname] || []

  // Sort page sections by order
  const sortedSections = pageConfig
    .filter((section) => section.visible)
    .sort((a, b) => a.order - b.order)

  return (
    <>
      {sortedSections.map((section, index) => {
        const Component = section.component
        const containerClass = section.layout === 'CONTAINER' ? 'container mx-auto px-4' : 'w-full'

        return (
          <section key={`${section.title}-${index}`} className={containerClass}>
            <Component {...(section.props || {})} />
          </section>
        )
      })}

      {sortedSections.length === 0 && (
        <div className='container mx-auto px-4 py-16 text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Welcome to {templateConfig.name} Template
          </h1>
          <p className='text-gray-600'>No sections configured for this page ({pathname})</p>
        </div>
      )}
    </>
  )
}
