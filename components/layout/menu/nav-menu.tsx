import { Settings } from 'lucide-react'
import Link from 'next/link'

export function NavMenu() {
  return (
    <ul className="flex item-center gap-2">
      <li>
        <Link area-label="設定" className="block p-2" href="/settings">
          <Settings />
        </Link>
      </li>
    </ul>
  )
}
