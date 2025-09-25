import { FormLayout } from '@/components/layout/form-layout'

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}
