import type { Metadata } from 'next'

import { SigninForm } from './components'

export const metadata: Metadata = {
  title: 'ログイン',
}

export default function Page() {
  return (
    <>
      <SigninForm />
    </>
  )
}
