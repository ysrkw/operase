import { FormLayout } from '../../components/layout/form-layout'

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}
