import { signIn, upsertOAuthUser } from "@/utils/db/servicefirebase";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { Anybody } from "next/font/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // fullname: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        const user:any = await signIn(credentials.email)

        if (user) {
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (isPasswordValid){
            //pastikan mengembalikan object user yang bersih
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role
            }
          }
          
        } 
        return null
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
    if (account?.provider === "credentials" && user) {
      token.email = user.email;
      token.fullname = user.fullname;
      token.role = user.role;
    }
    if (account && (account.provider === "google" || account.provider === "github") && user) {
      const data = {
        fullname: user.name as string,
        email: user.email as string,
        image: (user as any).image as string | undefined,
        type: account.provider,
      };

      const result = await upsertOAuthUser(data);
      if (result.status) {
        token.fullname = data.fullname;
        token.email = data.email;
        token.image = data.image;
        token.role = result.data?.role ?? "user";
        token.type = data.type;
      }
    }
    // console.log("jwt callback", { token, account, profile, user });
    return token;
  },

  async session({ session, token }: any) {
    if (token.email) {
      session.user.email = token.email;
    }
    if (token.fullname) {
      session.user.fullname = token.fullname;
    }
    if (token.role) {
      session.user.role = token.role;
    }
    if (token.image) {
      session.user.image = token.image;
    }
    if (token.type) {
      session.user.type = token.type;
    }
    // console.log("session callback", { session, token });
    return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  }
};

export default NextAuth(authOptions)