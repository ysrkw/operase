import { Context, Effect } from 'effect'

import { Email } from '../models/email'
import { UserRepository } from './user-repository'

export interface UserService {
  exists: (email: Email) => Effect.Effect<boolean, Error, UserRepository>
}

export const UserServiceTag = Context.GenericTag<UserService>('UserService')
