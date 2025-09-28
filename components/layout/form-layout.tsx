import Link from 'next/link'

import { Copyright } from './parts/copyright'
import { Logo } from './parts/logo'

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center">
      <header className="flex min-h-16 items-center justify-center">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <article className="w-full max-w-md px-4 py-4 md:px-0">
        {children}
      </article>
      <footer className="flex min-h-16 items-center justify-center">
        <Copyright />
      </footer>
    </main>
  )
}
