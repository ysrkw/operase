import type { Metadata } from 'next'

import { SignupForm } from './components'

export const metadata: Metadata = {
  title: 'Sign up',
}

export default function Page() {
  return (
    <>
      <SignupForm />
    </>
  )
}
