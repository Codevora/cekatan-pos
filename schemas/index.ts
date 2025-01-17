import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Mohon masukkan Email anda",
    }),
    password: z.string().min(8, {
        message: "Mohon masukkan password anda",
    }),
})

export const RegisterSchema = z.object({
 email: z.string().email({
  message: "Mohon masukkan email anda",
 }),
 password: z.string().min(8, {
  message: "Password harus mengandung minimal 8 karakter",
 }),
 name: z.string().min(1, {
  message: "Mohon isi dengan nama lengkap anda",
 }),
});