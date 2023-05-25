import Link from "next/link";

export default function LogOut() {
	return <div className={"m-3 mt-16"}>
		<h1 className={"text-2xl font-semibold mb-3"}>Account</h1>
		<Link href={"/api/auth/signout"}
		      className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-3"}>
			Sign out
		</Link>
	</div>
}