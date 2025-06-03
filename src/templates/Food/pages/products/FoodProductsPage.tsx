import Image from 'next/image'
import { foodProducts } from '~/assets/templateProducts'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

export default async function FoodProductsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-100'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-6'>🍕 Gourmet Kitchen</h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Savor the finest culinary creations made with fresh, premium ingredients. From artisan
            pizzas to gourmet burgers, every dish tells a story.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <span className='bg-orange-500/30 px-4 py-2 rounded-full'>👨‍🍳 Chef Crafted</span>
            <span className='bg-orange-500/30 px-4 py-2 rounded-full'>🚚 Fast Delivery</span>
            <span className='bg-orange-500/30 px-4 py-2 rounded-full'>🌱 Fresh Ingredients</span>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Menu Categories</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {['Pizza', 'Burgers', 'Sushi', 'Desserts'].map((category) => (
              <div
                key={category}
                className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-4xl mb-4'>
                  {category === 'Pizza' && '🍕'}
                  {category === 'Burgers' && '🍔'}
                  {category === 'Sushi' && '🍣'}
                  {category === 'Desserts' && '🧁'}
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
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Chefs Specialties</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {foodProducts.map((product) => (
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
                      <Badge className='absolute top-3 left-3 bg-orange-600 hover:bg-orange-700'>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-6'>
                  <div className='text-sm text-orange-600 font-medium mb-2'>{product.category}</div>
                  <h3 className='font-bold text-lg mb-3 text-gray-800 line-clamp-2'>
                    {product.name}
                  </h3>

                  {/* Ingredients */}
                  {product.ingredients && (
                    <div className='mb-4'>
                      <div className='text-xs text-gray-600 mb-1'>Ingredients:</div>
                      <div className='flex flex-wrap gap-1'>
                        {product.ingredients.slice(0, 3).map((ingredient, index) => (
                          <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded'>
                            {ingredient}
                          </span>
                        ))}
                        {product.ingredients.length > 3 && (
                          <span className='text-xs text-gray-500'>
                            +{product.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Serving Info */}
                  {(product.size || product.pieces || product.servings) && (
                    <div className='mb-4'>
                      <div className='text-xs text-gray-600 mb-1'>Serving:</div>
                      <span className='text-xs bg-orange-100 px-2 py-1 rounded'>
                        {product.size || product.pieces || product.servings}
                      </span>
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
                    <span className='text-2xl font-bold text-orange-600'>${product.price}</span>
                    {product.originalPrice && (
                      <span className='text-lg text-gray-400 line-through'>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button className='w-full bg-orange-600 hover:bg-orange-700 text-white'>
                    Add to Cart 🍴
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Consultation CTA */}
      <section className='bg-gradient-to-r from-orange-600 to-red-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Custom Catering Available 👨‍🍳</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Planning a special event? Our experienced chefs can create custom menus tailored to your
            taste and dietary preferences.
          </p>
          <Button className='bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg'>
            Contact Chef
          </Button>
        </div>
      </section>
    </div>
  )
}
