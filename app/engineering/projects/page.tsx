import React, { Suspense } from "react";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Services from "@/components/pages/engineeringPage/projects/Services";

type SearchParams = Promise<{ callbackUrl?: string }>;

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const sp = await searchParams;
  const callbackUrl = sp.callbackUrl ?? "/";
  return (
    <main className="min-h-[calc(100vh-105px)] w-full max-w-7xl mx-auto p-5 flex flex-col">
      <ContentLandAnim style="flex flex-col gap-20 flex-1">
        <Suspense>
          <Services callbackUrl={callbackUrl} />
        </Suspense>
      </ContentLandAnim>
    </main>
  );
};

export default ProjectsPage;
