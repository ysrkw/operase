import { LayoutDashboard, Settings } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <ul className="flex flex-col">
      <li>
        <Link className="flex items-center gap-2 p-2" href="/dashboard">
          <LayoutDashboard />
          ダッシュボード
        </Link>
      </li>
      <li>
        <Link className="flex items-center gap-2 p-2" href="/settings">
          <Settings />
          設定
        </Link>
      </li>
    </ul>
  )
}
