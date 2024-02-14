import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: "a9af0059ed219e3213c6",
      clientSecret: "c17699229981174efb71d949583ab4ba574dbc7f",
    }),
  ],
  secret:'apple'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
