import { usePage } from '@inertiajs/react'

interface Props {
  children: React.ReactNode
}

export function LayoutAccount(props: Props) {
  const { children } = props

  const { user } = usePage<any>().props

  return (
    <div>
      <aside>
        <div>
          <img src={user.providerData.avatar_url} alt={user.providerData.username} />
          <p className="font-medium">{user.providerData.username}</p>
        </div>
        <div>
          <button>My tools</button>
          <button>My plugins</button>
        </div>
        {user.role === 'admin' && (
          <div>
            <button>Admin tools</button>
            <button>Admin gears</button>
            <button>Admin plugins</button>
          </div>
        )}
      </aside>
      <div>{children}</div>
    </div>
  )
}
