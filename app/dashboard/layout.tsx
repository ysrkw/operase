import Link from 'next/link'

import { Copyright } from '@/components/ui/copyright'
import { Logo } from '@/components/ui/logo'

import { NavMenu, SidebarMenu } from './components'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-16 flex items-center justify-between px-4">
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
      <footer className="h-8 flex items-center justify-center px-4">
        <Copyright />
      </footer>
    </>
  )
}
