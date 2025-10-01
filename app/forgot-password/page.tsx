import type { Metadata } from 'next'

import { PasswordResetForm } from './components/password-reset-form'

export const metadata: Metadata = {
  title: 'パスワードをお忘れですか？',
}

export default function Page() {
  return (
    <PasswordResetForm />
  )
}
