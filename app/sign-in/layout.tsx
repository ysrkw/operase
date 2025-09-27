import { FormLayout } from '@/components/layout/form-layout'

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}
