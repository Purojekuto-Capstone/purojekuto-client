import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout/layout'
import Link from 'next/link';

export default function EventDetail(props) {
  const router = useRouter()
  const {project, event} = router.query
  return (
    <>
      <Layout>
        {/* detalles de evento {project} {event} */}
        <div className="container__details">
        <h1>Project Detail</h1>
        <h4>Projecto 1</h4>
        <p>Descripcion detallada del proyecto</p>
        <p>Fecha de inicio   /   Fecha final</p>
        <button className="btn__btn-primary"><Link href="/" >
            <a>←Back</a>
        </Link></button>
    </div>
      </Layout>
    </>
  )
}
