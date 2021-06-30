import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout/layout'

export default function EventDetail(props) {
  const router = useRouter()
  const {project, event} = router.query
  return (
    <>
      <Layout>
        detalles de evento {project} {event}
      </Layout>
    </>
  )
}
