import { Context, Effect } from 'effect'

import { Email } from '../models/email'

export interface UserService {
  exists: (email: Email) => Effect.Effect<boolean, Error>
}

export const UserServiceTag = Context.GenericTag<UserService>('UserService')
