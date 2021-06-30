import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import { getProyect } from '../../utils/services';
import Projects from '../../data/projects.json';
import Link from 'next/link';

export default function ProjectComponent(props) {
  const router = useRouter()
  const {project} = router.query
  const [product,setProduct] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProyects() {
      const response = await getProyect(project);

      if (response.status === 200) {
        setProduct(response.data);
      }
      setIsLoading(false);
    }
    loadProyects();
  }, []);

  const handleOnCardClick = (id) => {
    router.push(`/project/${id}/event/id`);
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
              <Link href="/project/id/event/new">
                <button className= 'btn btn-primary'>New Event</button>
              </Link>
            </div>
    </div>
		<div className="card-text">
    <div className="container__list">
      {Projects.map(({ project_id, project_name, end_date }) => (
        <div className="container__content--project" 
        id={project_id} key={project_id} onClick={() => handleOnCardClick(project_id)}>
          <div className="container__deahtline">
            <div></div>
          </div>
          <div className="container__name">{project_name}</div>
          <div className="container__deahtline">{end_date}</div>
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