import React from 'react'
import { useRouter } from 'next/router'



export default function Project(props) {
  const router = useRouter()
  const {project} = router.query
  
  return (
    <div>
      test {project}
    </div>
  )
}
