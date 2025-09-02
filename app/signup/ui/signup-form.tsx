import { useId } from 'react'

import { signupAction } from '../actions/signup-action'

export function SignupForm() {
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  return (
    <form action={signupAction}>
      <label htmlFor={emailId}>Email</label>
      <input id={emailId} name="email" placeholder="john@example.com" type="email" />
      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} name="password" type="password" />
      <label htmlFor={confirmPasswordId}>Confirm Password</label>
      <input id={confirmPasswordId} name="confirmPassword" type="password" />
      <button type="submit">Sign up</button>
    </form>
  )
}
