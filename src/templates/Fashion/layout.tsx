type TProps = {
  children: React.ReactNode
}

export default function FashionLayout({ children }: TProps) {
  return <div className='fashion-template'>{children}</div>
}
