import { Filter, Grid, List, Star } from 'lucide-react'
import Image from 'next/image'
import { ecoFriendlyProducts, featuredProducts, premiumCollection } from '~/assets/defaultProducts'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

type TProps = {}

export default async function DefaultProductsPage({}: TProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
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
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
              product.badge === 'Best Seller'
                ? 'bg-red-500 text-white'
                : product.badge === 'New'
                ? 'bg-green-500 text-white'
                : product.badge === 'Eco-Friendly'
                ? 'bg-emerald-500 text-white'
                : 'bg-purple-500 text-white'
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>
      <div className='p-4'>
        <h3 className='font-semibold text-gray-900 mb-2'>{product.name}</h3>
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
        <div className='box text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Premium Water Bottles</h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Discover our collection of high-quality, sustainable water bottles designed for every
            lifestyle
          </p>
          <Button size='lg' variant='secondary' className='text-blue-600'>
            Shop Now
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className='box py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0'>
          <div className='flex items-center space-x-4'>
            <Button variant='outline' size='sm'>
              <Filter className='w-4 h-4 mr-2' />
              Filters
            </Button>
            <div className='flex items-center space-x-2'>
              <Button variant='ghost' size='icon'>
                <Grid className='w-4 h-4' />
              </Button>
              <Button variant='ghost' size='icon'>
                <List className='w-4 h-4' />
              </Button>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Input placeholder='Search products...' className='w-64' />
            <select className='px-3 py-2 border border-gray-300 rounded-md'>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className='box py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Featured Products</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Our most popular water bottles, loved by customers worldwide
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Eco-Friendly Collection */}
      <section className='bg-white py-12'>
        <div className='box'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Eco-Friendly Collection</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Sustainable options for the environmentally conscious
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ecoFriendlyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section className='box py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Premium Collection</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Luxury water bottles for those who appreciate the finest quality
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {premiumCollection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-gradient-to-r from-green-500 to-blue-500 text-white py-16'>
        <div className='box text-center'>
          <h2 className='text-3xl font-bold mb-4'>Stay Hydrated in Style</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who have made the switch to our premium water
            bottles
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Input
              placeholder='Enter your email for exclusive offers'
              className='max-w-md bg-white text-gray-900'
            />
            <Button variant='secondary' className='text-blue-600'>
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
