type TProps = {
  children: React.ReactNode
}

export default function ElectronicsLayout({ children }: TProps) {
  return <div className="electronics-template">{children}</div>
}
