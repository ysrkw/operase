'use client'

import { UserPlus } from 'lucide-react'
import { useId } from 'react'

import { signupAction } from './actions'

export function SignupForm() {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  return (
    <form action={signupAction}>
      <label htmlFor={nameId}>名前</label>
      <input id={nameId} name="name" placeholder="John Doe" type="text" />
      <label htmlFor={emailId}>メールアドレス</label>
      <input id={emailId} name="email" placeholder="john@example.com" type="email" />
      <label htmlFor={passwordId}>パスワード</label>
      <input id={passwordId} name="password" type="password" />
      <label htmlFor={confirmPasswordId}>パスワード（確認）</label>
      <input id={confirmPasswordId} name="confirmPassword" type="password" />
      <button type="submit">
        <UserPlus />
        アカウント作成
      </button>
    </form>
  )
}
