import type { Metadata } from 'next'
import { useId } from 'react'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
  const usernameId = useId();
  const passwordId = useId();

  return (
    <>
      <h1>Login</h1>
      <form action="/login" method="post">
        <label htmlFor={usernameId}>Username</label>
        <input id={usernameId} type="text" name="username" placeholder="username" />
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
