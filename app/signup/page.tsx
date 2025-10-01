import { signIn } from "@/auth"

export default function Signup() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("", { redirectTo: "/profile" })
      }}
    >
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Sign in with GitHub
      </button>
    </form>
  )
}
