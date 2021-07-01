import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import { getProyect, getActivitys } from '../../utils/services';
import Projects from '../../data/projects.json';
import Link from 'next/link';
import { store } from '../../context/store';

export default function ProjectComponent(props) {
  const router = useRouter()
  const {project} = router.query
  const [product,setProduct] = useState([]);
  const [events,setEvents] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const { state } = useContext(store)
  const { isAuth, token } = state

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    async function loadProyects() {
      const response = await getProyect(project,config);

      if (response.status === 200) {
        setProduct(response.data);
      }
      setIsLoading(false);
    }
    loadProyects();
  }, []);

  useEffect(() => {
    async function loadEvents() {
      const response = await getActivitys(project,config);

      if (response.status === 200) {
        setEvents(response.data);
      }
      setIsLoading(false);
    }
    loadEvents();
  }, []);
  

  const handleOnCardClick = (id) => {
    router.push(`/project/${id}/event/id`);
  };
  const handlebutton = () => {
    router.push(`/project/${project}/event/new`);
  };

  console.log(product)
  return (
    <Layout>

<div className="blog-wrapper">
	<div className="blog-card">
		<div className="card-details">
    <h1><strong> {product.project_name} </strong></h1>
      <span><i className="fa fa-calendar"></i>
     <strong> Start Date:</strong> {product.start_date}
      </span><span><i className="fa fa-heart">
        </i><strong>End Date:</strong> {product.end_date}</span>
    </div>
    <div className="card-details">
      <span><i className="fa fa-calendar"></i>
      <strong> Work Time:</strong> {product.work_time}
      </span><span><i className="fa fa-heart">
        </i><strong>Breack Time:</strong> {product.break_time}</span>
    </div>
    <div className="card-details">
      <span><i className="fa fa-calendar"></i>
      <strong> Progress Bar:</strong> 
      </span>
      <span>
      ................................
      </span>
    </div>
    <div className="card-details">
            <div className='container__button'>
              <h1>Projects Events</h1>
              {/* <Link href="/project/id/event/new"> */}
                <button onClick={handlebutton} className= 'btn btn-primary'>New Event</button>
              {/* </Link> */}
            </div>
    </div>
		<div className="card-text">
    <div className="container__list">
      {events.map(({ id, summary, end }) => (
        <div className="container__content--project" 
        id={id} key={id} onClick={() => handleOnCardClick(id)}>
          <div className="container__deahtline">
            <div></div>
          </div>
          <div className="container__name">{summary}</div>
          <div className="container__deahtline">{end}</div>
          <div className="container__deahtline">Barra Progreso</div>
          <div className="container__more">..</div>
        </div>
      ))}
    </div>
    </div>
		
	</div>

</div>
    </Layout>
  )
}