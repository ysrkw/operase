import type { Metadata } from 'next'

import { SignupForm } from './components'

export const metadata: Metadata = {
  title: 'アカウント作成',
}

export default function Page() {
  return (
    <>
      <SignupForm />
    </>
  )
}
