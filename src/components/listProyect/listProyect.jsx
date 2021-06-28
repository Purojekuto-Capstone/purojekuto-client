import React from 'react';
import ProyectsJson from '../../data/projects.json';

const listProyect = ({ proyects }) => {
  console.log(proyects)
  return (
    <div className="container__list">
      {proyects.map(({ id, project_name, end_date }) => (
        <div className="container__content" id={id} key={id}>
          <div className="container__deahtline">
            <div></div>
          </div>
          <div className="container__name">{project_name}</div>
          <div className="container__deahtline">{end_date}</div>
          <div className="container__more">..</div>
        </div>
      ))}
    </div>
  );
};

export default listProyect;
