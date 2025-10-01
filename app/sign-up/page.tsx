import type { Metadata } from 'next'

import { SignUpForm } from './components/sign-up-form'

export const metadata: Metadata = {
  title: 'アカウント作成',
}

export default function Page() {
  return (
    <SignUpForm />
  )
}
