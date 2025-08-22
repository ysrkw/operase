import { Context, Effect } from 'effect'

import { Email } from '../../models/email'
import { DrizzleService } from './drizzle-service'
import { SignupUser } from './signup-user'

export interface SignupUserRepository {
  exists: (email: Email) => Effect.Effect<boolean, Error, DrizzleService>
  save: (user: SignupUser) => Effect.Effect<void, Error, DrizzleService>
}

export const SignupUserRepository = Context.GenericTag<SignupUserRepository>('SignupUserRepository')
