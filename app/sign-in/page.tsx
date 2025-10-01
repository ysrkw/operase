import type { Metadata } from 'next'

import { LoginForm } from './components/login-form'

export const metadata: Metadata = {
  title: 'ログイン',
}

export default function Page() {
  return (
    <LoginForm />
  )
}
