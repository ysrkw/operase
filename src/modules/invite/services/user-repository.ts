import { Context, Effect } from 'effect'

import { User } from '../models/user'

export interface UserRepository {
  save(user: User): Effect.Effect<void, Error>
}

export const UserRepositoryTag = Context.GenericTag<UserRepository>('UserRepository')
