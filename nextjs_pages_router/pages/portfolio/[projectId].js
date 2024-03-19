import { useRouter } from "next/router";
function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <div>
      <h1>Project Page for {projectId}</h1>
    </div>
  );
}

export default ProjectPage;
