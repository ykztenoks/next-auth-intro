import Link from "next/link"
import { auth, signOut } from "@/auth"

export default async function Navbar() {
  const session = await auth()

  console.log(session)
  return (
    <div className="flex justify-evenly items-center h-[6vh]">
      <Link href="/">home</Link>
      {session?.user ? (
        <>
          <Link href="/profile">profile</Link>
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/signup" })
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </>
      ) : (
        <>
          <Link href="/login">login</Link>
          <Link href="/signup">sign up</Link>
        </>
      )}
    </div>
  )
}
