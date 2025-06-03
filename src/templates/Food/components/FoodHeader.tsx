import Link from 'next/link'
import React from 'react'

const FoodHeader: React.FC<{ [key: string]: any }> = () => {
  return (
    <header className='bg-orange-600 text-white p-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
            <span className='text-orange-600 font-bold text-xl'>🍕</span>
          </div>
          <h1 className='text-2xl font-bold'>FoodieHub</h1>
        </div>

        <nav className='hidden md:flex space-x-6'>
          <Link href='/' className='hover:text-orange-200 transition-colors'>
            Home
          </Link>
          <Link href='/products' className='hover:text-orange-200 transition-colors'>
            Menu
          </Link>
          <Link href='#about' className='hover:text-orange-200 transition-colors'>
            About
          </Link>
          <Link href='#contact' className='hover:text-orange-200 transition-colors'>
            Contact
          </Link>
        </nav>

        <div className='flex items-center space-x-4'>
          <button className='bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg transition-colors'>
            Order Now
          </button>
          <div className='relative'>
            <span className='text-2xl'>🛒</span>
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default FoodHeader
