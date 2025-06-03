import FoodFooter from './components/FoodFooter'
import FoodHeader from './components/FoodHeader'
import FoodBanner from './pages/home/FoodBanner'
import FoodProductsPage from './pages/products/FoodProductsPage'

const foodTemplate: TTemplateConfig = {
  name: 'FOOD',
  layout: {
    Header: FoodHeader,
    Footer: FoodFooter
  },
  pages: {
    '/': [
      {
        order: 1,
        title: 'Banner',
        layout: 'CONTAINER',
        component: FoodBanner,
        visible: true,
        props: {
          title: 'Delicious Food Delivered Fresh',
          subtitle:
            'From farm to table, we bring you the finest culinary experiences with fast delivery!',
          buttonText: 'Order Now',
          buttonLink: '/products'
        }
      }
    ],
    '/products': [
      {
        order: 1,
        title: 'Menu',
        layout: 'FLUID',
        component: FoodProductsPage,
        visible: true,
        props: {}
      }
    ]
  },
  config: {
    features: {
      cart: true,
      wishlist: true,
      reviews: true,
      search: true,
      filters: true,
      delivery: true,
      reservations: true
    },
    theme: {
      primary: '#ea580c', // orange-600
      secondary: '#fb923c', // orange-400
      accent: '#fed7aa', // orange-200
      background: '#fff7ed', // orange-50
      text: '#9a3412' // orange-800
    },
    seo: {
      title: 'FoodieHub - Delicious Food Delivered Fresh',
      description:
        'Order fresh, delicious food from the best restaurants. Fast delivery, quality ingredients, and amazing flavors await you.',
      keywords: ['food delivery', 'restaurant', 'fresh food', 'online ordering', 'fast delivery']
    },
    branding: {
      logo: '🍕',
      name: 'FoodieHub',
      tagline: 'Fresh flavors, fast delivery',
      colors: {
        primary: '#ea580c',
        secondary: '#fb923c'
      }
    }
  }
}

export default foodTemplate
