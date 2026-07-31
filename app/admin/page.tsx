import UserTable from "@/components/admin/UserTable";


export default function AdminPage() {

  return (
    <main className="min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <UserTable />

    </main>
  );

}
