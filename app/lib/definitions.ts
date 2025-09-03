import { z } from 'zod'

export const Id = z.ulid().brand<'Id'>()
export type Id = z.infer<typeof Id>

export const Name = z.string().min(1).max(255).brand<'Name'>()
export type Name = z.infer<typeof Name>

export const Email = z.email().brand<'Email'>()
export type Email = z.infer<typeof Email>

export const Password = z.string().min(8).max(64).brand<'Password'>()
export type Password = z.infer<typeof Password>

export const ConfirmPassword = z.string().min(8).max(64).brand<'ConfirmPassword'>()
export type ConfirmPassword = z.infer<typeof ConfirmPassword>

export const HashedPassword = z.string().nonempty().brand<'HashedPassword'>()
export type HashedPassword = z.infer<typeof HashedPassword>
