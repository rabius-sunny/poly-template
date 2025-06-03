import { Battery, Cpu, Monitor, Smartphone, Zap } from 'lucide-react'
import { Button } from '~/components/ui/button'

type TProps = {}

export default async function ElectronicsBanner({}: TProps) {
  return (
    <div className='relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse' />
        <div className='absolute top-40 right-32 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce' />
        <div className='absolute bottom-32 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping' />
      </div>

      {/* Content Container */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <div className='inline-flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full'>
                <Zap className='w-4 h-4' />
                <span>Latest Tech Sale</span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                Next-Gen
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>
                  Electronics
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-gray-300 max-w-2xl'>
                Discover cutting-edge technology that powers your digital lifestyle. Premium
                quality, innovative design.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className='grid grid-cols-2 gap-4 text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center'>
                  <Cpu className='w-4 h-4 text-yellow-400' />
                </div>
                <span>Latest Processors</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center'>
                  <Battery className='w-4 h-4 text-yellow-400' />
                </div>
                <span>Extended Battery</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center'>
                  <Monitor className='w-4 h-4 text-yellow-400' />
                </div>
                <span>4K Displays</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center'>
                  <Smartphone className='w-4 h-4 text-yellow-400' />
                </div>
                <span>Smart Features</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Shop Electronics
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-4 border-2 border-white hover:bg-white text-gray-900 font-semibold text-lg rounded-xl transition-all duration-300'
              >
                View Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-wrap gap-6 text-sm text-gray-400'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>Free Tech Support</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>2-Year Warranty</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-400'>✓</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Content - Tech Showcase */}
          <div className='relative'>
            <div className='relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-700'>
              <div className='space-y-6'>
                {/* Featured Product Display */}
                <div className='h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute inset-0 bg-black/20' />
                  <div className='relative text-center'>
                    <Monitor className='w-16 h-16 mx-auto mb-4 text-white' />
                    <div className='text-white font-bold text-lg'>Latest MacBook Pro</div>
                    <div className='text-white/80'>M3 Chip • 16GB RAM</div>
                  </div>
                </div>

                <div className='text-center space-y-2'>
                  <h3 className='text-xl font-bold'>Featured Product</h3>
                  <p className='text-gray-400'>Professional Performance</p>
                  <div className='flex justify-center items-center space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className='text-yellow-400 text-lg'>
                        ⭐
                      </span>
                    ))}
                    <span className='text-sm text-gray-400 ml-2'>(4.9/5)</span>
                  </div>
                  <div className='text-2xl font-bold text-yellow-400'>$1,999</div>
                </div>
              </div>
            </div>

            {/* Floating Sale Badge */}
            <div className='absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg'>
              30% OFF!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
