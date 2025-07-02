import React from "react";
import Image from "next/image";

interface Props {
  userID: string | null;
}

/**
 * @param userID - string
 *
 * This component shows the user's cart
 *
 * @returns - JSX
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const YourCart = ({ userID }: Props) => {
  // fetch data using userID or from locakStorage

  return (
    <div className="flex flex-col gap-5 h-full">
      <h2>My Cart</h2>

      <div className="flex-1 flex flex-col gap-2 items-center justify-center ">
        <Image
          src={"/helpers/no_products.svg"}
          alt="empty folder"
          width={50}
          height={50}
          priority
          className="w-40 h-auto anim-transition"
        />
        <small>You cart is empty.</small>
      </div>
    </div>
  );
};

export default YourCart;
