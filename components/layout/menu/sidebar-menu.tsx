import { LayoutDashboard, LogOut } from 'lucide-react'
import Link from 'next/link'

export function SidebarMenu() {
  return (
    <ul className="flex flex-col">
      <li>
        <Link className="flex items-center gap-2 p-2" href="/dashboard">
          <LayoutDashboard />
          ダッシュボード
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-2 p-2" href="/signout">
          <LogOut />
          ログアウト
        </Link>
      </li>
    </ul>
  )
}
