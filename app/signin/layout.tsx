import { FormLayout } from '@/components/layout/form-layout'

export default function SigninLayout({ children }: { children: React.ReactNode }) {
  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}
