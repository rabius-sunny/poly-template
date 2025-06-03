import React from 'react'

interface FoodLayoutProps {
  children: React.ReactNode
  template: TTemplateConfig
}

const FoodLayout: React.FC<FoodLayoutProps> = ({ children, template }) => {
  const { Header, Footer } = template.layout

  return (
    <div className='min-h-screen flex flex-col bg-orange-50'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default FoodLayout
