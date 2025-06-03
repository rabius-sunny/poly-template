'use client'

import { Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default function DefaultHeader({}: TProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='box'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-3xl font-bold text-gray-900'>Default</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex space-x-8'>
            <a href='#' className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium'>
              Home
            </a>
            <a href='#' className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium'>
              Products
            </a>
            <a href='#' className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium'>
              Categories
            </a>
            <a href='#' className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium'>
              About
            </a>
            <a href='#' className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium'>
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className='hidden md:flex flex-1 max-w-xs mx-8'>
            <div className='relative w-full'>
              <Input type='text' placeholder='Search products...' className='pr-10' />
              <Button variant='ghost' size='icon' className='absolute right-0 top-0 h-full px-3'>
                <Search className='w-4 h-4 text-gray-400' />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className='flex items-center space-x-2'>
            {/* Cart */}
            <Button variant='ghost' size='icon' className='relative'>
              <ShoppingCart className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                3
              </span>
            </Button>

            {/* User Account */}
            <Button variant='ghost' size='icon'>
              <User className='w-5 h-5' />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden'
            >
              <Menu className='w-5 h-5' />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-gray-200'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/* Mobile Search */}
              <div className='px-3 py-2'>
                <Input type='text' placeholder='Search products...' />
              </div>

              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Home
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Products
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Categories
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                About
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
