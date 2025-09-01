import type { Metadata } from 'next'

import { useId } from 'react'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function Page() {
  const emailId = useId()
  const passwordId = useId()

  return (
    <>
      <form action="/signin" method="post" name="signin">
        <label htmlFor={emailId}>Email</label>
        <input id={emailId} name="email" placeholder="john@example.com" type="email" />
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} name="password" type="password" />
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}
