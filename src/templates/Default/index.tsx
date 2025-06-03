import DefaultFooter from './components/DefaultFooter'
import DefaultHeader from './components/DefaultHeader'
import DefaultBanner from './pages/home/DefaultBanner'
import DefaultProductsPage from './pages/products/DefaultProductsPage'

const defaultTemplate: TTemplateConfig = {
  name: 'DEFAULT',
  layout: {
    Header: DefaultHeader,
    Footer: DefaultFooter
  },
  pages: {
    '/': [
      {
        order: 1,
        title: 'Banner',
        layout: 'CONTAINER',
        component: DefaultBanner,
        visible: true,
        props: {
          title: 'Welcome to Our Store',
          subtitle: 'Discover amazing products at unbeatable prices!',
          buttonText: 'Shop Now',
          buttonLink: '/products'
        }
      }
    ],
    '/products': [
      {
        order: 1,
        title: 'Products',
        layout: 'FLUID',
        component: DefaultProductsPage,
        visible: true,
        props: {}
      }
    ]
  },
  config: {
    features: {
      productGrid: true,
      productGridTwo: true,
      cart: true,
      sidebar: true
    },
    theme: {
      primary: '#1d4ed8', // blue-700
      secondary: '#fbbf24', // yellow-400
      accent: '#f472b6', // pink-400
      background: '#f3f4f6', // gray-100
      text: '#111827' // gray-900
    }
  }
}

export default defaultTemplate
