'use client'

import Link from 'next/link'
import { useId } from 'react'

import { signIn } from '../actions'

export function SignInForm() {
  const emailId = useId()
  const passwordId = useId()

  return (
    <form action={signIn}>
      <fieldset className="flex flex-col gap-4">
        <legend className="text-center text-xl">
          ログイン
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor={emailId}>メールアドレス</label>
          <input className="rounded border px-4 py-2" id={emailId} name="email" placeholder="john@example.com" required type="email" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={passwordId}>パスワード</label>
          <input className="rounded border px-4 py-2" id={passwordId} name="password" required type="password" />
          <div className="text-right">
            <Link className="text-sm underline" href="/forgot-password">
              パスワードをお忘れですか？
            </Link>
          </div>
        </div>
        <button className="cursor-pointer rounded-full border px-4 py-2 text-center" type="submit">
          ログインに進む
        </button>
        <div className="text-center">
          <Link className="text-sm underline" href="/sign-up">
            アカウントをお持ちでない場合はこちら
          </Link>
        </div>
      </fieldset>
    </form>
  )
}
