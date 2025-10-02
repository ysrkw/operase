import type { Metadata } from 'next'

import { CreateUserForm } from './components/create-user-form'

export const metadata: Metadata = {
  title: 'アカウント作成',
}

export default function Page() {
  return (
    <CreateUserForm />
  )
}
