import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout/layout'

export default function Project(props) {
  const router = useRouter()
  const {project} = router.query
  
  return (
    <Layout>
      <div>
        test {project}
      </div>
    </Layout>
  )
}
