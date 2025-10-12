interface ErrorListProps {
  errors: string[]
}

export function ErrorList({ errors }: ErrorListProps) {
  if (errors.length === 0) return null

  const ErrorListItems = errors.map((error, index) => (
    <li key={index}>
      <p className="text-red-500">{error}</p>
    </li>
  ))

  return (
    <ul className="flex flex-col gap-1">{ErrorListItems}</ul>
  )
}
