import { LayoutDashboard, LogOut } from 'lucide-react'
import Link from 'next/link'

export function SidebarMenu() {
  const menus = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/signout', icon: LogOut, label: 'Sign Out' },
  ]

  return (
    <ul className="flex flex-col">
      {menus.map(menu => (
        <li key={menu.href}>
          <Link className="flex items-center gap-2 p-2" href={menu.href}>
            <menu.icon />
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
