import { Copyright } from './parts/copyright'
import { Logo } from './parts/logo'

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-16 flex items-center justify-center px-4">
        <Logo />
      </header>
      <main className="max-w-lg m-auto p-4">
        {children}
      </main>
      <footer className="h-8 flex items-center justify-center px-4">
        <Copyright />
      </footer>
    </>
  )
}
