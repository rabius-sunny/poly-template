import { Heart, Sparkles, Star } from 'lucide-react'
import { Button } from '~/components/ui/button'

type TProps = {}

export default async function FashionBanner({}: TProps) {
  return (
    <div className='relative bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 overflow-hidden'>
      {/* Decorative Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-16 h-16 bg-pink-200/50 rounded-full' />
        <div className='absolute top-40 right-32 w-12 h-12 bg-purple-200/50 rounded-full' />
        <div className='absolute bottom-32 left-1/4 w-20 h-20 bg-pink-300/30 rounded-full' />
        <Sparkles className='absolute top-32 right-1/4 w-6 h-6 text-pink-400/60' />
        <Star className='absolute bottom-40 right-20 w-4 h-4 text-purple-400/60' />
      </div>

      {/* Content Container */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <div className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full'>
                <Heart className='w-4 h-4' />
                <span>New Collection</span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                Fashion
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600'>
                  Forward
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-gray-700 max-w-2xl'>
                Discover the latest trends and timeless pieces that define your unique style.
                Fashion that speaks to your soul.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className='grid grid-cols-2 gap-4 text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                  <Heart className='w-4 h-4 text-pink-500' />
                </div>
                <span className='text-gray-700'>Curated Styles</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <Sparkles className='w-4 h-4 text-purple-500' />
                </div>
                <span className='text-gray-700'>Premium Quality</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                  <Star className='w-4 h-4 text-pink-500' />
                </div>
                <span className='text-gray-700'>Trending Now</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <Heart className='w-4 h-4 text-purple-500' />
                </div>
                <span className='text-gray-700'>Sustainable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Shop Collection
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold text-lg rounded-full transition-all duration-300'
              >
                View Lookbook
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-wrap gap-6 text-sm text-gray-600'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-500'>✓</span>
                <span>Free Styling Service</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-500'>✓</span>
                <span>Easy Returns</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-500'>✓</span>
                <span>Sustainable Fashion</span>
              </div>
            </div>
          </div>

          {/* Right Content - Fashion Showcase */}
          <div className='relative'>
            <div className='relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-pink-200 shadow-xl'>
              <div className='space-y-6'>
                {/* Featured Product Display */}
                <div className='h-64 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-white/10' />
                  <div className='relative text-center text-white'>
                    <div className='w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center'>
                      <span className='text-2xl'>👗</span>
                    </div>
                    <div className='font-bold text-lg'>Summer Collection</div>
                    <div className='text-white/90'>Ethereal Elegance</div>
                  </div>
                </div>

                <div className='text-center space-y-2'>
                  <h3 className='text-xl font-bold text-gray-900'>Featured Style</h3>
                  <p className='text-gray-600'>Timeless Beauty</p>
                  <div className='flex justify-center items-center space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className='w-4 h-4 text-pink-400 fill-current' />
                    ))}
                    <span className='text-sm text-gray-500 ml-2'>(Loved by 1000+)</span>
                  </div>
                  <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600'>
                    $199
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Sale Badge */}
            <div className='absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg'>
              50% OFF!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
