import React from "react";
import Image from "next/image";

interface Props {
  userID: string | null;
}

/**
 * @param userID - string
 *
 * This component shows the user's favorites list
 *
 * @returns - JSX
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Favorites = ({ userID }: Props) => {
  // fetch data using userID

  return (
    <div className="flex flex-col gap-5 h-full">
      <h2>My Favorites</h2>
      <div className="flex-1 flex flex-col gap-2 items-center justify-center ">
        <Image
          src={"/helpers/no_favorites.svg"}
          alt="empty folder"
          width={50}
          height={50}
          priority
          className="w-40 h-auto anim-transition"
        />
        <small>You have not saved any items to your list yet.</small>
      </div>
    </div>
  );
};

export default Favorites;
