import { Logout } from "@/components/logout";
import Link from "next/link";

export default function Dashboard () {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
				<h1>Dashboard</h1>
				<div className="flex flex-row p-2 gap-x-4">
					<Link href="/account" className="py-[8px] px-[12px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
					  Account
					</Link>
					<Logout />
				</div>
		</div>
	);
};
