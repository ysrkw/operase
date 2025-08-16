import { Context, Effect } from 'effect'

import { HashedPassword } from '../models/hashed-password'
import { Password } from '../models/password'

export interface PasswordService {
  hash: (password: Password) => Effect.Effect<HashedPassword, Error>
}

export const PasswordServiceTag = Context.GenericTag<PasswordService>('PasswordService')
