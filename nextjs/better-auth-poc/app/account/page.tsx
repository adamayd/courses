import { Logout } from "@/components/logout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <div className="flex flex-row p-2 gap-x-4">
        <Link href="/dashboard" className="py-[8px] px-[12px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dashboard</Link>
        <Logout />
      </div>
    </div>
  );
}