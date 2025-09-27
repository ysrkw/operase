import type { Metadata } from 'next'

import Link from 'next/link'

export const metadata: Metadata = {
  title: 'パスワードをお忘れですか？',
}

export default function Page() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">メールアドレス</label>
        <input className="border py-2 px-4 rounded" id="email" name="email" placeholder="john@example.com" required type="email" />
      </div>
      <button className="border py-2 px-4 rounded-full text-center cursor-pointer" type="submit">
        リセットリンクを送信
      </button>
      <div className="text-center">
        <Link className="text-sm underline" href="/sign-in">
          ログインページへ
        </Link>
      </div>
    </form>
  )
}
