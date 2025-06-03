import React from 'react'

interface ElectronicsLayoutProps {
  children: React.ReactNode
  template: TTemplateConfig
}

const ElectronicsLayout: React.FC<ElectronicsLayoutProps> = ({ children, template }) => {
  const { Header, Footer } = template.layout

  return (
    <div className='min-h-screen flex flex-col bg-blue-50 relative'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />

      {/* Floating support button - only in Electronics template */}
      <div className='fixed bottom-6 right-6 z-50'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110'>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>🛠️</span>
            <span className='hidden md:inline font-semibold'>Tech Support</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ElectronicsLayout
