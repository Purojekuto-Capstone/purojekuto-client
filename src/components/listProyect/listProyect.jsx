import React from 'react';
import { useRouter } from 'next/router';
import ProyectsJson from '../../data/projects.json';

const listProyect = ({ proyects }) => {
  const router = useRouter();

  const handleOnCardClick = (id) => {
    router.push(`/project/${id}`);
  };


  return (
    <div className="container__list">
      {proyects.map(({ project_id, project_name, end_date,project_category }) => (
        <div className="container__content--project" 
        id={project_id} key={project_id} onClick={() => handleOnCardClick(project_id)}>
          <div className="container__deahtline">
            <div></div>
          </div>
          <div className="container__name">{project_name}</div>
          <div className="container__deahtline">{project_category}</div>
          <div className="container__deahtline">End: {end_date}</div>
          <div className="container__more">..</div>
        </div>
      ))}
    </div>
  );
};

export default listProyect;
