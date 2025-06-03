import Image from 'next/image'
import { fashionProducts } from '~/assets/templateProducts'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

export default async function FashionProductsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 to-rose-100'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>✨ Fashion Boutique</h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Discover your unique style with our curated collection of premium fashion pieces. From
            timeless classics to modern trends.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <span className='bg-pink-500/30 px-4 py-2 rounded-full'>🌟 Premium Quality</span>
            <span className='bg-pink-500/30 px-4 py-2 rounded-full'>🚚 Free Styling Advice</span>
            <span className='bg-pink-500/30 px-4 py-2 rounded-full'>💝 Gift Wrapping</span>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Shop by Style</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {['Dresses', 'Bags', 'Shoes', 'Jewelry'].map((category) => (
              <div
                key={category}
                className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-4xl mb-4'>
                  {category === 'Dresses' && '👗'}
                  {category === 'Bags' && '👜'}
                  {category === 'Shoes' && '👠'}
                  {category === 'Jewelry' && '💎'}
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
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Curated Collection</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {fashionProducts.map((product) => (
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
                      <Badge className='absolute top-3 left-3 bg-pink-600 hover:bg-pink-700'>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-6'>
                  <div className='text-sm text-pink-600 font-medium mb-2'>{product.category}</div>
                  <h3 className='font-bold text-lg mb-3 text-gray-800 line-clamp-2'>
                    {product.name}
                  </h3>

                  {/* Sizes */}
                  {product.sizes && (
                    <div className='mb-4'>
                      <div className='text-xs text-gray-600 mb-1'>Available Sizes:</div>
                      <div className='flex flex-wrap gap-1'>
                        {product.sizes.slice(0, 4).map((size, index) => (
                          <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded'>
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className='text-xs text-gray-500'>
                            +{product.sizes.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Colors */}
                  {product.colors && (
                    <div className='mb-4'>
                      <div className='text-xs text-gray-600 mb-1'>Colors:</div>
                      <div className='flex flex-wrap gap-1'>
                        {product.colors.slice(0, 3).map((color, index) => (
                          <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded'>
                            {color}
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
                    <span className='text-2xl font-bold text-pink-600'>${product.price}</span>
                    {product.originalPrice && (
                      <span className='text-lg text-gray-400 line-through'>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button className='w-full bg-pink-600 hover:bg-pink-700 text-white'>
                    Add to Cart ✨
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Style Consultation CTA */}
      <section className='bg-gradient-to-r from-pink-500 to-rose-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Personal Style Consultation ✨</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Book a one-on-one session with our style experts to discover your perfect look.
          </p>
          <Button className='bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg'>
            Book Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
