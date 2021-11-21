import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data
    // router.push("/clients/subha/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "subha",
        clientprojectid: "projecta",
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
