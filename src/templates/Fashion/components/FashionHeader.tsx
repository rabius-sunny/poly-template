'use client'

import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default function FashionHeader({}: TProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-pink-100'>
      <div className='box'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center'>
              <Heart className='w-4 h-4 text-white' />
            </div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
              Fashionista
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Collection
            </Link>
            <a
              href='#'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Women
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Men
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Accessories
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors'
            >
              Sale
            </a>
          </nav>

          {/* Search Bar */}
          <div className='hidden md:flex flex-1 max-w-sm mx-8'>
            <div className='relative w-full'>
              <Input
                type='text'
                placeholder='Search fashion...'
                className='border-pink-200 focus:border-pink-500 pr-10'
              />
              <Button
                variant='ghost'
                size='icon'
                className='absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-pink-500'
              >
                <Search className='w-4 h-4' />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className='flex items-center space-x-2'>
            {/* Wishlist */}
            <Button
              variant='ghost'
              size='icon'
              className='relative text-gray-600 hover:text-pink-500'
            >
              <Heart className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold text-[10px]'>
                3
              </span>
            </Button>

            {/* Cart */}
            <Button
              variant='ghost'
              size='icon'
              className='relative text-gray-600 hover:text-pink-500'
            >
              <ShoppingBag className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold text-[10px]'>
                5
              </span>
            </Button>

            {/* User Account */}
            <Button variant='ghost' size='icon' className='text-gray-600 hover:text-pink-500'>
              <User className='w-5 h-5' />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden text-gray-600 hover:text-pink-500'
            >
              <Menu className='w-5 h-5' />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-pink-100'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/* Mobile Search */}
              <div className='px-3 py-2'>
                <Input
                  type='text'
                  placeholder='Search fashion...'
                  className='border-pink-200 focus:border-pink-500'
                />
              </div>

              <Link
                href='/'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Home
              </Link>
              <Link
                href='/products'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Collection
              </Link>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Women
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Men
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Accessories
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md'
              >
                Sale
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
