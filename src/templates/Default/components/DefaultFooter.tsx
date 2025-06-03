import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default function DefaultFooter({}: TProps) {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Default Shop</h3>
            <p className='text-gray-300 text-sm'>
              Your trusted online shopping destination. Quality products, great prices, and
              exceptional service.
            </p>
            <div className='flex space-x-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-white hover:bg-gray-800'
              >
                <Facebook className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-white hover:bg-gray-800'
              >
                <Twitter className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-white hover:bg-gray-800'
              >
                <Instagram className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-white hover:bg-gray-800'
              >
                <Youtube className='w-5 h-5' />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Products
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Categories
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Customer Service</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Returns
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Size Guide
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Stay Updated</h4>
            <p className='text-gray-300 text-sm'>
              Subscribe to get updates on new products and offers.
            </p>
            <div className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='bg-gray-800 border-gray-700 text-white placeholder:text-gray-400'
              />
              <Button variant='secondary' size='sm'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='border-t border-gray-800 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
            <div className='flex items-center space-x-3'>
              <Mail className='w-5 h-5 text-gray-400' />
              <span className='text-gray-300'>support@shoplogo.com</span>
            </div>
            <div className='flex items-center space-x-3'>
              <Phone className='w-5 h-5 text-gray-400' />
              <span className='text-gray-300'>+1 (555) 123-4567</span>
            </div>
            <div className='flex items-center space-x-3'>
              <MapPin className='w-5 h-5 text-gray-400' />
              <span className='text-gray-300'>123 Commerce St, City, State 12345</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-800 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>© 2024 ShopLogo. All rights reserved.</div>
            <div className='flex space-x-6 text-sm'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
