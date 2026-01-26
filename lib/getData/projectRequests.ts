import { unstable_cache } from "next/cache";
import { connectDB } from "../mongodb";
import { ProjectRequest } from "@/models/User";

export const getProjectRequests = async (userID: string | undefined) => {
  const data = unstable_cache(
    async (userID: string | undefined) => {
      try {
        await connectDB();
        const userProjRequests = await ProjectRequest.find({ userId: userID });

        return {
          data: userProjRequests || null,
          error: null,
        };
      } catch (e) {
        console.error("[getUserProjRequests error]", e);
        return {
          data: null,
          error: "Something went wrong while fetching user data.",
        };
      }
    },
    [`user-project-requests-${userID}`],
    {
      revalidate: 3600,
      tags: [`user-project-requests-${userID}`],
    }
  );

  return await data(userID);
};
