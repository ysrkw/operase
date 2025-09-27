import type { Metadata } from 'next'

import Link from 'next/link'
import { useId } from 'react'

import { signIn } from './actions'

export const metadata: Metadata = {
  title: 'ログイン',
}

export default function Page() {
  const emailId = useId()
  const passwordId = useId()

  const inputClassNames = 'border py-2 px-4 rounded'

  return (
    <form action={signIn} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor={emailId}>メールアドレス</label>
        <input className={inputClassNames} id={emailId} name="email" placeholder="john@example.com" required type="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={passwordId}>パスワード</label>
        <input className={inputClassNames} id={passwordId} name="password" required type="password" />
        <div className="text-right">
          <Link className="text-sm underline" href="/forgot-password">
            パスワードをお忘れですか？
          </Link>
        </div>
      </div>
      <button className="border py-2 px-4 rounded-full text-center cursor-pointer" type="submit">
        ログイン
      </button>
      <div className="text-center">
        <Link className="text-sm underline" href="/sign-up">
          アカウントをお持ちでない場合はこちら
        </Link>
      </div>
    </form>
  )
}
