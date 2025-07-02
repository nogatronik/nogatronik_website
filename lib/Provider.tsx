"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: React.ReactNode;
}

/**
 *
 * @param children: React.ReactNode
 *
 * Session Provider for client side components in web app
 *
 * @returns Provider wrapping children
 */
const Provider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
