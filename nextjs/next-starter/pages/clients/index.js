import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "subha", name: "Subhankar" },
    { id: "basu", name: "Basudeb" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: {
                id: client.id,
              },
            }}
          >
            {client.name}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default ClientsPage;
