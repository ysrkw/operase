import { useId } from 'react'

import { signinAction } from '../actions'

export function SigninForm() {
  const emailId = useId()
  const passwordId = useId()

  return (
    <>
      <form action={signinAction}>
        <label htmlFor={emailId}>Email</label>
        <input id={emailId} name="email" placeholder="john@example.com" type="email" />
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} name="password" type="password" />
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}
