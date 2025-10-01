"use client"

import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()
  //   useEffect(() => {
  //     if (!session) {
  //       router.push("/signup")
  //     }
  //   }, [session])

  return (
    <div>
      {session?.user && (
        <>
          <h1>{session.user.name}</h1>

          <img src={session.user.image} alt="" />
        </>
      )}
    </div>
  )
}

interface Session {
  user: {
    name: string
    image: string
  }
  expires: string
}
