import Link from 'next/link'

import { Copyright } from './parts/copyright'
import { Logo } from './parts/logo'

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid place-items-center min-h-screen">
      <header className="flex items-center justify-center min-h-16">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className="w-full max-w-md px-4 md:px-0 py-4">
        {children}
      </main>
      <footer className="flex items-center justify-center min-h-16">
        <Copyright />
      </footer>
    </div>
  )
}
