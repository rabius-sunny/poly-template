import { Heart } from 'lucide-react'

type TProps = {}

export default function FashionFooter({}: TProps) {
  return (
    <footer className='bg-gradient-to-br from-pink-50 to-purple-50 border-t border-pink-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center'>
              <Heart className='w-4 h-4 text-white' />
            </div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
              Fashionista
            </h3>
          </div>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Your premier destination for fashion-forward styles. Curated collections, trending
            designs, and timeless elegance.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h4 className='font-semibold text-gray-900 mb-3'>Women</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Dresses
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Tops
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Bottoms
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold text-gray-900 mb-3'>Men</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Shirts
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Pants
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Jackets
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Footwear
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold text-gray-900 mb-3'>Accessories</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Bags
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Jewelry
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Watches
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Sunglasses
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold text-gray-900 mb-3'>Support</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Returns
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Shipping
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-pink-500 transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-pink-200 pt-8'>
            <p className='text-sm text-gray-500'>
              © 2024 Fashionista. All rights reserved. Made with ❤️ for fashion lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
