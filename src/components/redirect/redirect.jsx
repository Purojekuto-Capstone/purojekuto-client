import { useRouter } from 'next/router'

function RedirectPage(props) {
    const router = useRouter()
    if (typeof window !== 'undefined') {
      router.push(`${props.path}`)
    }

    return(
      <>
        Loading...
      </>
    )
}

export default RedirectPage