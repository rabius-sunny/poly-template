'use client'

import { Heart, Search, ShoppingCart, Star, Truck, Zap } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { defaultProducts } from '~/assets/templateProducts'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export default function DefaultProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Group products by category
  const categories = ['All', ...new Set(defaultProducts.map((product) => product.category))]
  const filteredProducts =
    selectedCategory === 'All'
      ? defaultProducts
      : defaultProducts.filter((product) => product.category === selectedCategory)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const ProductCard = ({ product }: { product: any }) => (
    <div className='group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden'>
      <div className='relative overflow-hidden'>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={256}
          className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
        />
        {product.badge && (
          <Badge
            className={`absolute top-2 left-2 ${
              product.badge === 'Best Seller'
                ? 'bg-red-500 hover:bg-red-600'
                : product.badge === 'New'
                ? 'bg-green-500 hover:bg-green-600'
                : product.badge === 'Premium'
                ? 'bg-purple-500 hover:bg-purple-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {product.badge}
          </Badge>
        )}
      </div>
      <div className='p-4'>
        <h3 className='font-semibold text-gray-900 mb-2'>{product.name}</h3>
        <p className='text-sm text-gray-600 mb-3'>{product.description}</p>
        <div className='flex items-center mb-2'>
          <div className='flex items-center space-x-1'>{renderStars(product.rating)}</div>
          <span className='text-sm text-gray-500 ml-2'>({product.reviews})</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='text-lg font-bold text-gray-900'>${product.price}</span>
            {product.originalPrice && (
              <span className='text-sm text-gray-500 line-through'>${product.originalPrice}</span>
            )}
          </div>
          <Button size='sm' className='bg-blue-600 hover:bg-blue-700'>
            <ShoppingCart className='w-4 h-4 mr-1' />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Premium Lifestyle Products</h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Discover our curated collection of high-quality products designed for modern living
          </p>
          <Button size='lg' variant='secondary' className='text-blue-600'>
            <Search className='w-4 h-4 mr-2' />
            Explore Collection
          </Button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-wrap gap-2 justify-center'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size='sm'
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            High-quality products carefully selected for modern lifestyle needs
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Why Choose Our Products?</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Were committed to providing exceptional quality and service
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Premium Quality</h3>
              <p className='text-gray-600'>
                Every product is carefully selected and tested to meet our high standards
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Truck className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Fast Shipping</h3>
              <p className='text-gray-600'>
                Free shipping on orders over $50 with fast, reliable delivery
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-8 h-8 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Customer Love</h3>
              <p className='text-gray-600'>
                Join thousands of satisfied customers who trust our products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Upgrade Your Lifestyle?</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Join our community and discover products that make a difference in your daily life
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Input
              placeholder='Enter your email for exclusive offers'
              className='max-w-md bg-white text-gray-900'
            />
            <Button variant='secondary' className='text-blue-600'>
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
