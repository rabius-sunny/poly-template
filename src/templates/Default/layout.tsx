type TProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: TProps) {
  return <div>{children}</div>
}
