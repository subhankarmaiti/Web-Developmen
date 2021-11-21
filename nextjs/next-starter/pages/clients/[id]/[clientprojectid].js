import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a SElected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
