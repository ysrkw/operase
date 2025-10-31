'use client'

import Link from 'next/link'
import { useActionState, useId, useState } from 'react'

import { login } from '../actions'
import { ErrorList } from '../../../components/form/error-list'

export function LoginForm() {
  const emailId = useId()
  const [email, setEmail] = useState('')
  function changeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  const passwordId = useId()
  const [password, setPassword] = useState('')
  function changePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  const [state, formAction, isPending] = useActionState(login, {
    emailErrors: [],
    passwordErrors: [],
  })

  return (
    <form action={formAction} name="login">
      <fieldset className="flex flex-col gap-4" disabled={isPending}>
        <legend className="text-center text-xl">
          ログイン
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor={emailId}>メールアドレス</label>
          <input className="rounded border px-4 py-2" id={emailId} name="email" placeholder="john@example.com" type="email" value={email} onChange={changeEmail} />
          <ErrorList errors={state.emailErrors} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={passwordId}>パスワード</label>
          <input className="rounded border px-4 py-2" id={passwordId} name="password" type="password" value={password} onChange={changePassword} />
          <ErrorList errors={state.passwordErrors} />
          <div className="text-right">
            <Link className="text-sm underline" href="/forgot-password">
              パスワードをお忘れですか？
            </Link>
          </div>
        </div>
        <button className="cursor-pointer rounded-full border px-4 py-2 text-center" type="submit">
          ログインに進む
        </button>
        <div className="text-center text-sm">
          アカウントをお持ちでない場合は
          <Link className="underline" href="/sign-up">
            こちら
          </Link>
        </div>
      </fieldset>
    </form>
  )
}
