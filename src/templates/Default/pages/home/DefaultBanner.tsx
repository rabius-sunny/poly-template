type TProps = {}

export default async function DefaultBanner({}: TProps) {
  return (
    <div className='relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-black opacity-20'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30'></div>

      {/* Content Container */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full'>
                🔥 Limited Time Offer
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Premium Collection
                <span className='block text-yellow-300'>Up to 70% Off</span>
              </h1>
              <p className='text-lg md:text-xl text-gray-200 max-w-lg'>
                Discover our exclusive range of premium products. Quality meets affordability in our
                biggest sale of the year.
              </p>
            </div>

            {/* Pricing */}
            <div className='flex items-center space-x-4'>
              <span className='text-3xl font-bold text-yellow-300'>$99</span>
              <span className='text-xl text-gray-300 line-through'>$329</span>
              <span className='bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold'>
                Save $230
              </span>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                Shop Now
              </button>
              <button className='px-8 py-4 border-2 border-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-300'>
                View Collection
              </button>
            </div>

            {/* Features */}
            <div className='flex flex-wrap gap-6 text-sm'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>Free Shipping</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>30-Day Returns</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className='relative'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-6 hover:rotate-0 transition-transform duration-500'>
              <div className='bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-6 space-y-4'>
                <div className='h-48 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg flex items-center justify-center'>
                  <span className='text-4xl'>🛍️</span>
                </div>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold'>Featured Product</h3>
                  <p className='text-gray-300'>Premium Quality</p>
                  <div className='flex justify-center items-center mt-2 space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className='text-yellow-400'>
                        ⭐
                      </span>
                    ))}
                    <span className='text-sm text-gray-300 ml-2'>(4.9)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-4 -right-4 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse'>
              Hot Deal!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
