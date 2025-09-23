import Link from 'next/link'

import { NavMenu, SidebarMenu } from './components'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-16 border-b flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="text-lg font-semibold">Operase</h1>
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
      <footer className="h-8 border-t flex items-center justify-center px-4">
        <p>© 2025 Operase</p>
      </footer>
    </>
  )
}
