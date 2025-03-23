"use client"
import { authClient } from "@/lib/auth-client";

export async function signIn(){
    await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/dashboard',
        errorCallbackURL: '/error'
        
    }) 

} 