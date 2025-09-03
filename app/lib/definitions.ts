import { z } from 'zod'

export const Name = z.string().min(1).max(255).brand<'Name'>()
export type Name = z.infer<typeof Name>

export const Email = z.email().brand<'Email'>()
export type Email = z.infer<typeof Email>

export const Password = z.string().min(8).max(64).brand<'Password'>()
export type Password = z.infer<typeof Password>

export const ConfirmPassword = Password.clone().brand<'ConfirmPassword'>()
export type ConfirmPassword = z.infer<typeof ConfirmPassword>
