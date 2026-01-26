import React from "react";
import Link from "next/link";
import { ProjectRequest } from "@/lib/types";

interface Props {
  userProjRequests: ProjectRequest[] | null;
}

const ProjectReqList = ({ userProjRequests }: Props) => {
  if (!userProjRequests || userProjRequests.length === 0) {
    return (
      <div className="rounded-xl border border-secondary/25 bg-background p-6">
        <h3>No project requests yet</h3>
        <p className="mt-1">When you submit a request, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {userProjRequests.map((request) => (
        <Link
          key={request._id.toString()}
          href={`/user-account/project-requests/${request._id}`}
          className={[
            "group rounded-xl border border-secondary/25 bg-background p-5",
            "transition-all duration-200",
            "hover:shadow-onHover hover:border-secondary/40",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate leading-tight">{request.subtitle}</h3>
              <p className="mt-1">{request.subject}</p>
              <small className="mt-2 block">
                Created {new Date(request.createdAt).toLocaleDateString()}
              </small>
            </div>

            {/* Right: status pill */}
            <small
              className={[
                "rounded-full px-4 py-1 border border-secondary/25",
                "text-secondary font-semibold capitalize",
                "shrink-0",
                request.status, // <- uses .pending/.inProgress/.completed/.rejected
              ].join(" ")}
            >
              {request.status}
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectReqList;
