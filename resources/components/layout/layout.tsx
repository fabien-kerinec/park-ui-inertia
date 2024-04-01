import { Header } from './header'
interface Props {
  children: React.ReactNode
  user?: any
}

export function Layout(props: Props) {
  const { children, user } = props

  return (
    <>
      <Header user={user} />
      <main>{children}</main>
    </>
  )
}
