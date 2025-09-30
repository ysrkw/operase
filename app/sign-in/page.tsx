import type { Metadata } from 'next'

import { SignInForm } from './components/sign-in-form'

export const metadata: Metadata = {
  title: 'ログイン',
}

export default function Page() {
  return (
    <SignInForm />
  )
}
