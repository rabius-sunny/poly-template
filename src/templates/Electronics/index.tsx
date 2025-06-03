import ElectronicsFooter from './components/ElectronicsFooter'
import ElectronicsHeader from './components/ElectronicsHeader'
import ElectronicsBanner from './pages/home/ElectronicsBanner'

const electronicsTemplate: TTemplateConfig = {
  name: 'ELECTRONICS',
  layout: {
    Header: ElectronicsHeader,
    Footer: ElectronicsFooter
  },
  pages: {
    '/': [
      {
        order: 1,
        title: 'Electronics Banner',
        layout: 'FLUID',
        component: ElectronicsBanner,
        visible: true,
        props: {
          title: 'Next-Gen Electronics',
          subtitle: 'Discover cutting-edge technology that powers your digital lifestyle',
          buttonText: 'Shop Electronics',
          buttonLink: '/products'
        }
      }
    ],
    '/products': [
      {
        order: 1,
        title: 'Electronics Products',
        layout: 'CONTAINER',
        component: ElectronicsBanner, // Using banner as placeholder, you can create a dedicated products component
        visible: true,
        props: {
          title: 'Electronics Collection',
          description: 'Browse our premium electronics',
          buttonText: 'View All Electronics',
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
      sidebar: false
    },
    theme: {
      primary: '#1f2937', // gray-800
      secondary: '#fbbf24', // yellow-400
      accent: '#8b5cf6', // violet-500
      background: '#111827', // gray-900
      text: '#ffffff' // white
    }
  }
}

export default electronicsTemplate
