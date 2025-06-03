import TemplateLayout from '~/components/TemplateLayout'
import TemplateRenderer from '~/components/TemplateRenderer'

type TProps = {}

export default async function ProductsPage({}: TProps) {
  return (
    <TemplateLayout>
      <TemplateRenderer pathname='/products' />
    </TemplateLayout>
  )
}
