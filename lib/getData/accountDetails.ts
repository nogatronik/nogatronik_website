import { unstable_cache } from "next/cache";
import { connectDB } from "../mongodb";
import { User } from "@/models/User";

export const getAccountDetails = async (userID: string) => {
  const data = unstable_cache(
    async (userID: string) => {
      console.log("call from cache function");
      try {
        await connectDB();
        const userFound = await User.findOne({ _id: userID }).select(
          "name lName email password image dateOfBirth phoneNumber"
        );

        const plainUser = userFound.toObject();
        const safeUser = {
          _id: plainUser._id.toString(),
          name: plainUser.name,
          lName: plainUser.lName || null,
          email: plainUser.email,
          password: plainUser.password,
          image: plainUser.image || null,
          phoneNumber: plainUser.phoneNumber || null,
          dateOfBirth: plainUser.dateOfBirth
            ? plainUser.dateOfBirth.toISOString().split("T")[0]
            : null,
        };

        return {
          data: safeUser || null,
          error: null,
        };
      } catch (e) {
        console.error("[getUserData error]", e);
        return {
          data: null,
          error: "Something went wrong while fetching user data.",
        };
      }
    },
    [`user-info-${userID}`],
    {
      revalidate: 3600,
      tags: [`user-info-${userID}`],
    }
  );

  return await data(userID);
};
