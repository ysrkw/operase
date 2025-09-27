import Link from 'next/link'

import { NavMenu } from './menu/nav-menu'
import { SidebarMenu } from './menu/sidebar-menu'
import { Copyright } from './parts/copyright'
import { Logo } from './parts/logo'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <NavMenu />
        </nav>
      </header>
      <main className="flex flex-1">
        <aside className="w-64">
          <SidebarMenu />
        </aside>
        <article className="p-2">
          {children}
        </article>
      </main>
      <footer className="flex items-center justify-center p-4">
        <Copyright />
      </footer>
    </>
  )
}
