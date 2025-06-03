type TTemplate =
  | 'DEFAULT'
  | 'FASHION'
  | 'ELECTRONICS'
  | 'FOOD'
  | 'PHARMACEUTICALS'
  | 'BEAUTY'
  | 'CLOTHING'
  | 'FLOWER_SHOP'
  | 'FRUIT'
  | 'GROCERY'
  | 'HARDWARE'
  | 'HOME'
  | 'JEWELRY'
  | 'PET'
  | 'SPORTS'
  | 'TOYS'

type TTemplateConfig = {
  name: TTemplate
  layout: {
    Header: React.ComponentType<{ [key: string]: any }>
    Footer: React.ComponentType<{ [key: string]: any }>
    Sidebar?: React.ComponentType<{ [key: string]: any }>
    ProductGrid: React.ComponentType<{ products: Record<string, any>[] }>
    ProductGridTwo?: React.ComponentType<{ products: Record<string, any>[] }>
    Cart: React.ComponentType<{ [key: string]: any }>
  }
  pages: {
    [key: string]:
      | {
          id: string
          type: string
          layout: 'FLUID' | 'CONTAINER'
          visible: boolean
          title: string
          apiUrl?: string
          variant: 'DEFAULT' | 'GRID' | 'LIST' | 'GRADIENT' | 'MINIMAL'
          textPosition?: 'LEFT' | 'RIGHT' | 'CENTER'
          component: React.ComponentType<any>
          props?: Record<string, any>
        }[]
      | React.ComponentType<any>
  }
  config: {
    features: {
      [key: string]: any
    }
    theme: {
      primary: string
      secondary: string
      accent: string
      background: string
      text: string
    }
    [key: string]: any
  }
}
