import { LayoutDashboard, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'

export function NavMenu() {
  const menus = [
    { href: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <ul className="flex item-center gap-2">
      {menus.map(menu => (
        <li key={menu.href}>
          <Link area-label={menu.label} className="block p-2" href={menu.href}>
            <menu.icon />
          </Link>
        </li>
      ))}
    </ul>
  )
}

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
