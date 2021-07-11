import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import { getProyect, getActivitys } from '../../utils/services';
import Projects from '../../data/projects.json';
import Link from 'next/link';
import { store } from '../../context/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../components/loader/loader'
import EventListItem from '../../components/eventListItem/eventListItem';

export default function ProjectDetail(props) {
  const router = useRouter();
  const { project } = router.query;
  const [product, setProduct] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useContext(store);
  const { isAuth, token } = state;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if(project) {
      getProyect(project, config)
      .then(res => {
        setProduct(res.data)
        getActivitys(project, config)
        .then(res => {
          setEvents(res.data)
          console.log(res.data);
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
        })
      })
      .catch(err => {
        console.error(err);
      })
    }
  }, [project]);


  const handleOnCardClick = (id) => {
    router.push(`/project/${id}/event/id`);
  };

  return (
    <Layout>
      {loading ? (
        <div className='loader__container' style={{'minHeight': '70vh'}}>
          <Loader/>
        </div>
      ) : (
        <>
          <div className='projectDetail__container'>
            <div className='header__container'>
              <div className='head__container'>
                <Link href='/'>
                  <a className='back-btn'>←Back</a>
                </Link>
                <h1 className='title'>{product.project_name}</h1>
              </div>
              
              <div className='actions__container'>
                <Link href={`/project/${project}/event/new`}>
                  <a className='btn-primary'><FontAwesomeIcon icon={faPlus}/> Add activity</a>
                </Link>
                <Link href={`/project/${project}/calendar`}>
                  <a className='btn-primary'><FontAwesomeIcon icon={faCalendarAlt}/> Calendar</a>
                </Link>
              </div>
            </div>

            <div className='details__container'>
              <div className='detail__group'>
                <h6 className='label'>Project start date:</h6>
                <p className='detail'>{product.start_date}</p>
              </div>
              <div className='detail__group'>
                <h6 className='label'>Project end date</h6>
                <p className='detail'>{product.end_date}</p>
              </div>
              <div className='detail__group'>
                <h6 className='label'>Working hours:</h6>
                <p className='detail'>{product.work_time}h a week</p>
              </div>
              <div className='detail__group'>
                <h6 className='label'>Break hours</h6>
                <p className='detail'>{product.break_time}h a day</p>
              </div>
            </div>

            <div className='events__container'>
                <h2 className='title'>Activities</h2>
                <div className='events__wrapper'>
                  {events.length >= 1 ? events.map(e => (
                      <Link href={`/project/${project}/event/${e.id}`}>
                        <a>
                          <EventListItem key={e.id} event={e}/>
                        </a>
                      </Link>
                    )) : (
                      <div className='empty__space '>
                        Ups, there's no activities on this project, add one.
                      </div>
                    )}
                </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
