"use server"

import { auth } from "@/lib/auth";

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: "user1@gmail.com",
            password: "123456"
        }
    })
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "user1@gmail.com",
            password: "123456",
            name: "User One"
        }
    })
}