import React from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { getProjectRequest } from "@/lib/getData/projectReq";
import { ProjectRequest } from "@/lib/types";

const getData = async (id: string | undefined) => {
  // Variables
  const userData = await getProjectRequest(id);

  return userData.data;
};

const ProjRequestPage = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;

  const { id } = resolvedParams;
  const request: ProjectRequest | null = await getData(id);

  return (
    <div className="flex-1 min-h-[calc(100vh-105px)] flex flex-col">
      <ContentLandAnim style="flex flex-col gap-6 p-5 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-start gap-3">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                {request?.subtitle}
              </h1>
              <small>{request?.subject}</small>
            </div>

            <span
              className={[
                "w-fit items-center rounded-full border px-3 py-1 text-xs font-medium capitalize",
                "border-secondary/25 ml-auto",
                request!.status,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <small>{request?.status}</small>
            </span>
          </div>

          <hr className="border-[1px] border-secondary/25 w-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-secondary/25 bg-background p-4">
            <p className="text-xs text-muted-foreground">Created</p>
            <p className="mt-1 text-sm font-medium">
              {request?.createdAt
                ? new Date(request.createdAt).toLocaleDateString()
                : "—"}
            </p>
          </div>

          <div className="rounded-lg border border-secondary/25 bg-background p-4">
            <p className="text-xs text-muted-foreground">Completed</p>
            <p className="mt-1 text-sm font-medium">
              {request?.completedAt
                ? new Date(request.completedAt).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-secondary/25 bg-background">
          <div className="border-b border-secondary/20 px-4 py-3">
            <p className="text-sm font-semibold">Message</p>
          </div>

          <div className="p-4">
            <p className="text-sm leading-6 whitespace-pre-wrap text-foreground">
              {request?.message || "—"}
            </p>
          </div>
        </div>
      </ContentLandAnim>
    </div>
  );
};

export default ProjRequestPage;
