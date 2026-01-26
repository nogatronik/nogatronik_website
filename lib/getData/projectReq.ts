import { unstable_cache } from "next/cache";
import { connectDB } from "../mongodb";
import { ProjectRequest } from "@/models/User";

export const getProjectRequest = async (requestID: string | undefined) => {
  const data = unstable_cache(
    async (requestID: string | undefined) => {
      try {
        await connectDB();
        const projRequest = await ProjectRequest.findOne({ _id: requestID });
        return {
          data: projRequest || null,
          error: null,
        };
      } catch (e) {
        console.error("[getProjectRequest error]", e);
        return {
          data: null,
          error: "Something went wrong while fetching user data.",
        };
      }
    },
    [`user-project-request-${requestID}`],
    {
      revalidate: 3600,
      tags: [`user-project-request-${requestID}`],
    }
  );

  return await data(requestID);
};
