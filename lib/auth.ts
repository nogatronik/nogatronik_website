import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

/**
 * AuthOptions for Next-Auth
 */
export const authOptions: NextAuthOptions = {
  // Providers to sign in users
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // Conventional signin with credentials: email & password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // connects to db and tries to find an existing user to determine outcome of signIn (credentials)
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        // handling possible outcomes
        if (!user.emailVerified) throw new Error("Email Not Verified");
        if (!user) throw new Error("Wrong Email");
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!passwordMatch) throw new Error("Wrong Password");

        // returning user and successful authentication flow
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();
        // Handles when user uses google provider
        if (account?.provider === "google") {
          let existingUser = await User.findOne({ email: user.email });

          // if user doesn't exist, create a record on db
          if (!existingUser) {
            existingUser = await User.create({
              email: user.email,
              name: user.name,
              image: user.image,
              isOAuth: true,
              emailVerified: true,
            });
          }

          // returning true and successful authentication flow
          return "/login?error=EmailExists";
        }
        // Handles when user uses other providers (to be determined)

        return true;
      } catch (e) {
        console.log("Error during signIn: ", e);
        return false;
      }
    },
    async jwt({ token, user, account }) {
      /* 
      This is triggered when a user is authenticated and it ensures sub is equivalent to mongoDB id.
      */
      if (user) {
        await connectDB();
        const dbUser = await User.findOne({ email: user.email });
        token.sub = dbUser._id.toString();
        token.isOAuth = dbUser.isOAuth;
        token.provider = account?.provider;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        userID: token.sub,
        isOAuth: token.isOAuth,
        provider: token.provider,
      };
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};
