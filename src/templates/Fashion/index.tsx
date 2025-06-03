import FashionFooter from './components/FashionFooter'
import FashionHeader from './components/FashionHeader'
import FashionBanner from './pages/home/FashionBanner'

const fashionTemplate: TTemplateConfig = {
  name: 'FASHION',
  layout: {
    Header: FashionHeader,
    Footer: FashionFooter
  },
  pages: {
    '/': [
      {
        order: 1,
        title: 'Fashion Banner',
        layout: 'FLUID',
        component: FashionBanner,
        visible: true,
        props: {
          title: 'Fashion Forward',
          subtitle: 'Discover the latest trends and timeless pieces that define your unique style',
          buttonText: 'Shop Collection',
          buttonLink: '/products'
        }
      }
    ],
    '/products': [
      {
        order: 1,
        title: 'Fashion Products',
        layout: 'CONTAINER',
        component: FashionBanner, // Using banner as placeholder
        visible: true,
        props: {
          title: 'Fashion Collection',
          description: 'Browse our curated fashion pieces',
          buttonText: 'View All Fashion',
          buttonLink: '/products'
        }
      }
    ]
  },
  config: {
    features: {
      productGrid: true,
      productGridTwo: true,
      cart: true,
      sidebar: true,
      wishlist: true
    },
    theme: {
      primary: '#ec4899', // pink-500
      secondary: '#8b5cf6', // violet-500
      accent: '#f472b6', // pink-400
      background: '#fdf2f8', // pink-50
      text: '#374151' // gray-700
    }
  }
}

export default fashionTemplate
