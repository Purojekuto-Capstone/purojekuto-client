import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../components/layout/layout';
import Link from 'next/link';
import { store } from '../../../../context/store';
import { getProyect, getActivity } from '../../../../utils/services';
import moment from 'moment';
import LoaderComponent from '../../../../components/loader/loader';

export default function EventDetail(props) {
  const router = useRouter();
  const { project, event } = router.query;
  const { state } = useContext(store);
  const { isAuth, token } = state;
  const [activity, setActivity] = useState([]);
  const [projectDetails, setprojectDetails] = useState({})
  const [loading, setloading] = useState(true)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    getActivity(project, event, config)
      .then((res) => {
        setActivity(res);
        getProyect(project, config)
        .then(res => {
          setprojectDetails(res.data)
          setloading(false)
          console.log(res);
        })
        .catch(err => {

        })
      })
      .catch((err) => {
        console.error(err);
      });
  }, [project]);
  return (
    <>
      <Layout>
        <Link href={`/project/${project}`}>
          <a className="back-btn">←Back</a>
        </Link>
        {/* detalles de evento {project} {event} */}
        {loading ? (
          <LoaderComponent/>
        ) : (
          <>
            <div className="container__details">
              <h3>{projectDetails.project_name}</h3>
              <h1>{activity.summary}</h1>
              <p>
                {moment(activity.start).format('DD MMMM YY')} from <b>{moment(activity.start).format('h:mm a')}</b> to <b>{moment(activity.end).format('h:mm a')}</b>
              </p>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
