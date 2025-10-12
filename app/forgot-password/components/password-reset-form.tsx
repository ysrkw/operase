'use client'

import Link from 'next/link'
import { ChangeEvent, useActionState, useId, useState } from 'react'

import { ErrorList } from '../../../components/form/error-list'
import { passwordReset } from '../actions'

export function PasswordResetForm() {
  const emailId = useId()

  const [email, setEmail] = useState('')

  function changeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  const [state, formAction, isPending] = useActionState(passwordReset, {
    emailErrors: []
  })

  return (
    <form action={formAction} name="password-reset">
      <fieldset className="flex flex-col gap-4" disabled={isPending}>
        <legend className="text-center text-xl">
          パスワードリセット
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor={emailId}>メールアドレス</label>
          <input className="rounded border px-4 py-2 disabled:bg-gray-100" id={emailId} name="email" placeholder="john@example.com" type="email" value={email} onChange={changeEmail} />
          <ErrorList errors={state.emailErrors} />
        </div>
        <button className="cursor-pointer rounded-full border px-4 py-2 text-center disabled:bg-gray-100" type="submit">
          リセットリンクを送信
        </button>
        <div className="text-center">
          <Link className="text-sm underline" href="/sign-in">
            ログインページに戻る
          </Link>
        </div>
      </fieldset>
    </form>
  )
}
