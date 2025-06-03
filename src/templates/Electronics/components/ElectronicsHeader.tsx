'use client'

import { Menu, Search, ShoppingCart, User, Zap } from 'lucide-react'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default function ElectronicsHeader({}: TProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='bg-gray-900 text-white shadow-lg sticky top-0 z-50'>
      <div className='box'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <Zap className='w-8 h-8 text-yellow-400' />
            <h1 className='text-2xl font-bold'>ElectroTech</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex space-x-6'>
            <a href='#' className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'>
              Home
            </a>
            <a href='#' className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'>
              Products
            </a>
            <a href='#' className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'>
              Categories
            </a>
            <a href='#' className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'>
              Support
            </a>
            <a href='#' className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'>
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className='hidden md:flex flex-1 max-w-sm mx-8'>
            <div className='relative w-full'>
              <Input 
                type='text' 
                placeholder='Search electronics...' 
                className='bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 pr-10' 
              />
              <Button variant='ghost' size='icon' className='absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white'>
                <Search className='w-4 h-4' />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className='flex items-center space-x-2'>
            {/* Cart */}
            <Button variant='ghost' size='icon' className='relative text-gray-300 hover:text-white'>
              <ShoppingCart className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold'>
                2
              </span>
            </Button>

            {/* User Account */}
            <Button variant='ghost' size='icon' className='text-gray-300 hover:text-white'>
              <User className='w-5 h-5' />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden text-gray-300 hover:text-white'
            >
              <Menu className='w-5 h-5' />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-gray-700'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/* Mobile Search */}
              <div className='px-3 py-2'>
                <Input 
                  type='text' 
                  placeholder='Search electronics...' 
                  className='bg-gray-800 border-gray-700 text-white placeholder:text-gray-400'
                />
              </div>

              <a href='#' className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md'>
                Home
              </a>
              <a href='#' className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md'>
                Products
              </a>
              <a href='#' className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md'>
                Categories
              </a>
              <a href='#' className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md'>
                Support
              </a>
              <a href='#' className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md'>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
