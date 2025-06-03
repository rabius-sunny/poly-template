import React from 'react'

interface DefaultLayoutProps {
  children: React.ReactNode
  template: TTemplateConfig
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, template }) => {
  const { Header, Footer } = template.layout

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
