import { Suspense } from "react";
import ProjectDetails from "./ProjectDetils";

export default function ProjectDetailsPage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading project...</p>}>
      <ProjectDetails />
    </Suspense>
  );
}
