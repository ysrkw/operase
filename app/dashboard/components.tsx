import { LogOut } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/signout">
            <LogOut />
            Sign Out
          </Link>
        </li>
      </ul>
    </aside>
  )
}
