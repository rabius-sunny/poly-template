import Link from 'next/link'
import React from 'react'

const FoodFooter: React.FC<{ [key: string]: any }> = () => {
  return (
    <footer className='bg-orange-800 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                <span className='text-orange-800 font-bold text-xl'>🍕</span>
              </div>
              <h3 className='text-xl font-bold'>FoodieHub</h3>
            </div>
            <p className='text-orange-200 leading-relaxed'>
              Delicious food delivered fresh to your doorstep. Experience the best flavors from
              around the world.
            </p>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-orange-200'>
              <li>
                <Link href='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/products' className='hover:text-white transition-colors'>
                  Menu
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#contact' className='hover:text-white transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Categories</h4>
            <ul className='space-y-2 text-orange-200'>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  🍕 Pizza
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  🍔 Burgers
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  🍝 Pasta
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  🥗 Salads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <div className='space-y-2 text-orange-200'>
              <p>📞 (555) 123-FOOD</p>
              <p>📧 hello@foodiehub.com</p>
              <p>📍 123 Culinary Street, Food City</p>
              <p>🕒 Open: 9 AM - 11 PM</p>
            </div>
          </div>
        </div>

        <div className='border-t border-orange-700 mt-8 pt-8 text-center text-orange-200'>
          <p>&copy; 2024 FoodieHub. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  )
}

export default FoodFooter
