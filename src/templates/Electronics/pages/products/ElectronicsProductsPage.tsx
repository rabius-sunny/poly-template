import Image from 'next/image'
import { electronicsProducts } from '~/assets/templateProducts'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

export default async function ElectronicsProductsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>⚡ Electronics Store</h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Discover the latest in cutting-edge technology. From smartphones to smart homes, we have
            everything you need to stay connected.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <span className='bg-blue-500/30 px-4 py-2 rounded-full'>🚚 Free Shipping Over $50</span>
            <span className='bg-blue-500/30 px-4 py-2 rounded-full'>🔧 Expert Tech Support</span>
            <span className='bg-blue-500/30 px-4 py-2 rounded-full'>🔄 30-Day Returns</span>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Shop by Category</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {['Smartphones', 'Laptops', 'Audio', 'Gaming'].map((category) => (
              <div
                key={category}
                className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-4xl mb-4'>
                  {category === 'Smartphones' && '📱'}
                  {category === 'Laptops' && '💻'}
                  {category === 'Audio' && '🎧'}
                  {category === 'Gaming' && '🎮'}
                </div>
                <h3 className='font-semibold text-gray-800'>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className='pb-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Featured Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {electronicsProducts.map((product) => (
              <Card
                key={product.id}
                className='group hover:shadow-xl transition-all duration-300 border-0 shadow-lg'
              >
                <CardHeader className='p-0'>
                  <div className='relative overflow-hidden rounded-t-lg'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={256}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    {product.badge && (
                      <Badge className='absolute top-3 left-3 bg-blue-600 hover:bg-blue-700'>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-6'>
                  <div className='text-sm text-blue-600 font-medium mb-2'>{product.category}</div>
                  <h3 className='font-bold text-lg mb-3 text-gray-800 line-clamp-2'>
                    {product.name}
                  </h3>

                  {/* Specs */}
                  {product.specs && (
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-1'>
                        {product.specs.slice(0, 2).map((spec, index) => (
                          <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded'>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rating */}
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='flex text-yellow-400'>
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className='text-sm text-gray-600'>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl font-bold text-blue-600'>${product.price}</span>
                    {product.originalPrice && (
                      <span className='text-lg text-gray-400 line-through'>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                    Add to Cart ⚡
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Support CTA */}
      <section className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Need Technical Support? ⚡</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Our expert technicians are here to help you with setup, troubleshooting, and
            optimization.
          </p>
          <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg'>
            Contact Tech Support
          </Button>
        </div>
      </section>
    </div>
  )
}
