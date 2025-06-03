import TemplateRenderer from '~/components/TemplateRenderer'

type TProps = {}

export default async function Page({}: TProps) {
  return <TemplateRenderer pathname='/' />
}
