import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { DASHBOARD_NAV } from "@/utils/links";

interface Props {
  userID: string | null;
}

/**
 * @param userID - string
 *
 * This component shows the dashboard of a signed user
 *
 * @returns - JSX
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dashboard = ({ userID }: Props) => {
  return (
    <ul>
      <h2>Dashboard</h2>
      {DASHBOARD_NAV.map((option, index) =>
        option.type === "action" ? (
          <button
            onClick={() => signOut()}
            key={index}
            className="cursor-pointer w-full group flex items-center gap-5 py-5 px-2 border-b-2 border-secondary/25"
          >
            <option.icon className="icon group-hover:text-primary anim-transition" />
            <small className="group-hover:text-primary anim-transition">
              {option.text}
            </small>
          </button>
        ) : (
          <Link
            href={option.href!}
            className="group flex items-center gap-5 py-5 px-2 border-b-2 border-secondary/25"
            key={index}
          >
            <option.icon className="icon group-hover:text-primary anim-transition" />
            <small className="group-hover:text-primary anim-transition">
              {option.text}
            </small>
          </Link>
        )
      )}
    </ul>
  );
};

export default Dashboard;
