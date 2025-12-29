import { db } from "@/db/client";

export default async function Page() {
  const result = await db.run("select 1 as ok");
  return (
    <main className="p-6">
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </main>
  );
}
