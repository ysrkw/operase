import { z } from 'zod'

export const Name = z.string().min(1).max(255)
export type Name = z.infer<typeof Name>

export const Email = z.email()
export type Email = z.infer<typeof Email>

export const Password = z.string().min(8).max(64)
export type Password = z.infer<typeof Password>

export const ConfirmPassword = Password.clone()
export type ConfirmPassword = z.infer<typeof ConfirmPassword>
