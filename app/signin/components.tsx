import { useId } from 'react'

import { signinAction } from './actions'

export function SigninForm() {
  const emailId = useId()
  const passwordId = useId()

  return (
    <>
      <form action={signinAction}>
        <label htmlFor={emailId}>メールアドレス</label>
        <input id={emailId} name="email" placeholder="john@example.com" type="email" />
        <label htmlFor={passwordId}>パスワード</label>
        <input id={passwordId} name="password" type="password" />
        <button type="submit">ログイン</button>
      </form>
    </>
  )
}
