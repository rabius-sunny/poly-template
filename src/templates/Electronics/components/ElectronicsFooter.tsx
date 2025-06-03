import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Zap } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default async function ElectronicsFooter({}: TProps) {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Zap className='w-6 h-6 text-yellow-400' />
              <h3 className='text-xl font-bold'>ElectroTech</h3>
            </div>
            <p className='text-gray-300 text-sm'>
              Your premier destination for cutting-edge electronics. Quality tech products,
              competitive prices, and expert support.
            </p>
            <div className='flex space-x-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
              >
                <Facebook className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
              >
                <Twitter className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
              >
                <Instagram className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
              >
                <Youtube className='w-5 h-5' />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-yellow-400'>Categories</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Smartphones
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Laptops & Computers
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Audio & Headphones
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Gaming
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Smart Home
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-yellow-400'>Support</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Technical Support
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Warranty Info
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Shipping Guide
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-yellow-400'>Tech Updates</h4>
            <p className='text-gray-300 text-sm'>
              Get the latest tech news and exclusive deals delivered to your inbox.
            </p>
            <div className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='bg-gray-800 border-gray-700 text-white placeholder:text-gray-400'
              />
              <Button className='bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='border-t border-gray-800 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
            <div className='flex items-center space-x-3'>
              <Mail className='w-5 h-5 text-yellow-400' />
              <span className='text-gray-300'>support@electrotech.com</span>
            </div>
            <div className='flex items-center space-x-3'>
              <Phone className='w-5 h-5 text-yellow-400' />
              <span className='text-gray-300'>+1 (555) TECH-123</span>
            </div>
            <div className='flex items-center space-x-3'>
              <MapPin className='w-5 h-5 text-yellow-400' />
              <span className='text-gray-300'>123 Tech Avenue, Silicon Valley, CA 94000</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-800 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>© 2024 ElectroTech. All rights reserved.</div>
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
