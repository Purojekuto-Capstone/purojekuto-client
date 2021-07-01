import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Calendar from '../../../components/calendar/calendar'
import Layout from '../../../components/layout/layout'

export default function calendar() {
  const router = useRouter()
  const { project } = router.query

  return (
    <>
      <Layout>
        <Link href={`/project/${project}`}>
          <a>←Back</a>
        </Link>
        <Calendar projectId={project}/>
      </Layout>
    </>
  )
}
