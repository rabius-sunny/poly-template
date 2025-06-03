import TemplateLayout from '~/components/TemplateLayout'
import TemplateRenderer from '~/components/TemplateRenderer'

type TProps = {}

export default async function Page({}: TProps) {
  return (
    <TemplateLayout>
      <TemplateRenderer pathname='/' />
    </TemplateLayout>
  )
}
