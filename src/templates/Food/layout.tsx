import React from 'react'

interface FoodLayoutProps {
  children: React.ReactNode
  template: TTemplateConfig
}

const FoodLayout: React.FC<FoodLayoutProps> = ({ children, template }) => {
  const { Header, Footer } = template.layout

  return (
    <div className='min-h-screen flex flex-col bg-orange-50'>
      {/* Promotional top banner - only in Food template */}
      <div className='bg-red-600 text-white py-2 text-center text-sm font-semibold'>
        🔥 LIMITED TIME: Free delivery on orders over $25! Use code: FREEDEL25 🚚
      </div>

      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default FoodLayout
