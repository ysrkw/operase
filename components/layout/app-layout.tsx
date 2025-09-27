import { Sidebar } from './parts/sidebar'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1">
      <aside className="w-64 border-r">
        <Sidebar />
      </aside>
      <article className="p-2">
        {children}
      </article>
    </main>
  )
}
