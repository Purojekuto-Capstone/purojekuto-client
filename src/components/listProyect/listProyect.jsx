import React from 'react';
import { useRouter } from 'next/router';
import ProyectsJson from '../../data/projects.json';

const listProyect = ({ proyects }) => {
  const router = useRouter();

  const handleOnCardClick = (id) => {
    console.log(id)
    router.push(`/project/${id}`);
  };

  console.log(proyects)

  return (
    <div className="container__list">
      {proyects.map(({ id, activity_name, end_date }) => (
        <div className="container__content--project" 
        id={id} key={id} onClick={() => handleOnCardClick(id)}>
          <div className="container__deahtline">
            <div></div>
          </div>
          <div className="container__name">{activity_name}</div>
          <div className="container__deahtline">{end_date}</div>
          <div className="container__deahtline">Barra Progreso</div>
          <div className="container__more">..</div>
        </div>
      ))}
    </div>
  );
};

export default listProyect;
