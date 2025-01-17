import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Mohon masukkan Email anda",
    }),
    password: z.string().min(8, {
        message: "Mohon masukkan password anda",
    }),
})