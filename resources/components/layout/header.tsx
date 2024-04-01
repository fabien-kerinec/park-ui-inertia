import { Link } from '@inertiajs/react'
import { Button } from '../ui/button'

interface Props {
  user: any
}

export function Header(props: Props) {
  const { user } = props

  return (
    <header>
      <Link href="/">
        <p>salut</p>
      </Link>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Tools</Link>
            </li>
          </ul>
        </nav>
        <Button variant={'solid'}>Click me</Button>
        {!user && (
          <Button variant="outline" width="full">
            Login
          </Button>
        )}
        {user && <p>logged in</p>}
      </div>
    </header>
  )
}
