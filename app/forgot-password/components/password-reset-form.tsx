'use client'

import Link from 'next/link'
import { useId } from 'react'

import { passwordReset } from '../actions'

export function PasswordResetForm() {
  const email = useId()

  return (
    <form action={passwordReset}>
      <fieldset className="flex flex-col gap-4">
        <legend className="text-center text-xl">
          パスワードリセット
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor={email}>メールアドレス</label>
          <input className="rounded border px-4 py-2" id={email} name="email" placeholder="john@example.com" required type="email" />
        </div>
        <button className="cursor-pointer rounded-full border px-4 py-2 text-center" type="submit">
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
