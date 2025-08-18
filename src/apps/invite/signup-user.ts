import { Data } from 'effect'

import { Email } from '../../models/email'
import { HashedPassword } from '../../models/hashed-password'
import { Id } from '../../models/id'

export interface SignupUser {
  email: Email
  hashedPassword: HashedPassword
  id: Id
}

export const SignupUser = Data.case<SignupUser>()
