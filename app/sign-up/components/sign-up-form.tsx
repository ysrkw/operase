'use client'

import Link from 'next/link'
import { useId } from 'react'

import { signUp } from '../actions'

export function SignUpForm() {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  return (
    <form action={signUp}>
      <fieldset className="flex flex-col gap-4">
        <legend className="text-center text-xl">
          アカウント作成
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor={nameId}>名前</label>
          <input className="rounded border p-2 px-4" id={nameId} name="name" placeholder="John Doe" type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={emailId}>メールアドレス</label>
          <input className="rounded border p-2 px-4" id={emailId} name="email" placeholder="john@example.com" type="email" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={passwordId}>パスワード</label>
          <input autoComplete="new-password" className="rounded border p-2 px-4" id={passwordId} name="password" type="password" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={confirmPasswordId}>パスワード（確認）</label>
          <input autoComplete="new-password" className="rounded border p-2 px-4" id={confirmPasswordId} name="confirmPassword" type="password" />
        </div>
        <button className="cursor-pointer items-center rounded-full border px-4 py-2" type="submit">
          アカウントを作成する
        </button>
        <div className="text-center text-sm">
          すでにアカウントをお持ちの方は
          <Link className="underline" href="/sign-in">
            こちら
          </Link>
        </div>
      </fieldset>
    </form>
  )
}
