import type { Metadata } from 'next'

import Link from 'next/link'
import { useId } from 'react'

import { signUp } from './actions'

export const metadata: Metadata = {
  title: 'アカウント作成',
}

export default function Page() {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const confirmPasswordId = useId()

  const inputClassNames = 'border p-2 px-4 rounded'

  return (
    <form action={signUp} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor={nameId}>名前</label>
        <input className={inputClassNames} id={nameId} name="name" placeholder="John Doe" required type="text" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={emailId}>メールアドレス</label>
        <input className={inputClassNames} id={emailId} name="email" placeholder="john@example.com" required type="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={passwordId}>パスワード</label>
        <input className={inputClassNames} id={passwordId} name="password" required type="password" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={confirmPasswordId}>パスワード（確認）</label>
        <input className={inputClassNames} id={confirmPasswordId} name="confirmPassword" required type="password" />
      </div>
      <button className="items-center border py-2 px-4 rounded-full cursor-pointer" type="submit">
        アカウント作成
      </button>
      <div className="text-center">
        <Link className="text-sm underline" href="/sign-in">
          すでにアカウントをお持ちの方はこちら
        </Link>
      </div>
    </form>
  )
}
