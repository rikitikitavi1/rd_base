import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "@auth/core/jwt";
import {User} from "@auth/core/providers/notion";


export default NextAuth({
 providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch('http://0.0.0.0:8000/api/auth/login/', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })

        const user = await res.json()

        if (res.ok && user) {
          return {
            accessToken: user.access,
            refreshToken: user.refresh,
            ...user.user
          }
        }
        return null
      }
    })
 ],
 session: {
    strategy: 'jwt',
 },
 callbacks: {
     // @ts-ignore
    async jwt(token: JWT, user: User) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.user = user
      }
      return token
    },
     // @ts-ignore
    async session(session, token) {
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    }
 }
})
