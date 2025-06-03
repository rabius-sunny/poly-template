import DefaultFooter from '~/templates/Default/sections/DefaultFooter'
import DefaultHeader from '~/templates/Default/sections/DefaultHeader'

type TProps = {}

export default function Page({}: TProps) {
  return (
    <div>
      <DefaultHeader />
      <DefaultFooter />
    </div>
  )
}
