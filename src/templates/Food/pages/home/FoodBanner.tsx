import React from 'react'

const FoodBanner: React.FC<{ [key: string]: any }> = (props) => {
  const {
    title = 'Delicious Food Delivered Fresh',
    subtitle = 'From farm to table, we bring you the finest culinary experiences with fast delivery!',
    buttonText = 'Order Now',
    buttonLink = '/products'
  } = props

  return (
    <section className='relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>

      {/* Food emojis background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-10 left-10 text-6xl opacity-20 animate-bounce'>🍕</div>
        <div className='absolute top-20 right-20 text-5xl opacity-20 animate-pulse'>🍔</div>
        <div className='absolute bottom-20 left-20 text-4xl opacity-20 animate-bounce delay-1000'>
          🍝
        </div>
        <div className='absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse delay-500'>
          🥗
        </div>
        <div className='absolute top-1/2 left-1/4 text-3xl opacity-20 animate-bounce delay-300'>
          🍟
        </div>
        <div className='absolute top-1/3 right-1/3 text-4xl opacity-20 animate-pulse delay-700'>
          🌮
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>{title}</h1>
          <p className='text-xl md:text-2xl mb-8 leading-relaxed opacity-90'>{subtitle}</p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
            <a
              href={buttonLink}
              className='bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              {buttonText} 🚀
            </a>
            <button className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300'>
              View Menu 📋
            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-6 text-sm opacity-80'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>⚡</span>
              <span>Fast Delivery</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>🌟</span>
              <span>5-Star Quality</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>🔥</span>
              <span>Fresh & Hot</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>💫</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodBanner
