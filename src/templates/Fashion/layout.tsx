import React from 'react'

interface FashionLayoutProps {
  children: React.ReactNode
  template: TTemplateConfig
}

const FashionLayout: React.FC<FashionLayoutProps> = ({ children, template }) => {
  const { Header, Footer } = template.layout

  return (
    <div className='min-h-screen flex flex-col bg-pink-50'>
      <Header />
      <main className='flex-1'>{children}</main>

      {/* Custom content above footer - only in Fashion template */}
      <section className='bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-2xl font-bold mb-2'>💫 Fashion Forward Newsletter</h3>
          <p className='mb-4'>Stay updated with the latest fashion trends and exclusive offers!</p>
          <div className='flex justify-center gap-4'>
            <input
              type='email'
              placeholder='Enter your email...'
              className='px-4 py-2 rounded-lg text-gray-800 max-w-xs'
            />
            <button className='bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-pink-50 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FashionLayout
