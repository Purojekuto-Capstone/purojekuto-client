import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout/layout'
import Link from 'next/link';
import { store } from '../../../../context/store';
import { getProyect, getActivity } from '../../../../utils/services';

export default function EventDetail(props) {
  const router = useRouter()
  const {project, event} = router.query
  const { state } = useContext(store)
  const { isAuth, token } = state
  const [activity,setActivity] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    getActivity(event, config)
    .then(res => {
      console.log('getActivity',res);
    })
    .catch(err => {
      console.error(err)
    })

    // getProyect(project, config)
    // .then(res => {
    //   setActivity(res.data);
    //   console.log(res.data);
    // })
    // .catch(err => {
    //   console.error(err);
    // })
    // async function loadAtivity() {
    //   const response = await getProyect(project,config);

    //   if (response.status === 200) {
    //     setActivity(response.data);
    //   }
    // }
    // loadAtivity();
  }, [project]);
  return (
    <>
      <Layout>
        {/* detalles de evento {project} {event} */}
        <div className="container__details">
        <h1>Event Detail</h1>
        <h4>{activity.project_name}</h4>
        <p>Descripcion detallada del proyecto</p>
        <p>{activity.start_date}  /   {activity.end_date}</p>
        <button className="btn__btn-primary"><Link href="/" >
            <a>←Back</a>
        </Link></button>
    </div>
      </Layout>
    </>
  )
}
