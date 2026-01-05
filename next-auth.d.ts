import "next-auth"; // import for module augmentation

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name?: string;
      image?: string;
    };
    userID: string;
    isOAuth: boolean;
    provider: string;
  }
}
