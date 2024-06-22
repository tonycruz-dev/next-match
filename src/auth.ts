import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {prisma} from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
 
export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
  callbacks:{
    async session({token,session}) {
      if(token.sub && session.user) {
        session.user.id = token.sub
      }
      return session;
    }
    // async jwt({token}) {
    //   console.log(token)
    //   return token;
    // }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})