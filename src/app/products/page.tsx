import TemplateRenderer from '~/components/TemplateRenderer'

type TProps = {}

export default async function ProductsPage({}: TProps) {
  return <TemplateRenderer pathname="/products" />
}
