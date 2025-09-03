import type { Metadata } from 'next'

import { signoutAction } from './actions'

export const metadata: Metadata = {
  title: 'ログアウト',
}

export default async function Page() {
  await signoutAction()
}
