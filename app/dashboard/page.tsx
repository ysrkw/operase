import type { Metadata } from 'next'

import { Sidebar } from './components'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Page() {
  return (
    <>
      <Sidebar />
      <h1>Dashboard</h1>
    </>
  )
}
