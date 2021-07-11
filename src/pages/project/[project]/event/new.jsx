import React, {useState,useContext} from 'react';
import Layout from '../../../../components/layout/layout'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postEvent } from '../../../../utils/services';
import { store } from '../../../../context/store';
import { useRouter } from 'next/router';

export default function NewEvent(props) {
  const router = useRouter()
  const {project} = router.query
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { state } = useContext(store)
  const { isAuth, token } = state
  
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  
  const onSubmit = async (data) => {
    let eventJson = data;
    eventJson['activity_id'] = '105807747967363609529'
    eventJson['project'] = project

    const response = await postEvent(eventJson,config);
    console.log(response)
    router.push(`/project/${project}`);

  };
  const handleBack = () => {
    router.push(`/project/${project}`);
  }

  const [ flagView, setFlaView] = useState(true)
  return (
    <>
      <Layout>
      <form className="container form__container" onSubmit={handleSubmit(onSubmit)}>
          <div onClick={handleBack} >
            <a className='back-btn'>←Back</a>
          </div>
          <h1 className="container__h1">New event</h1>
          <p>Name</p>
          <input
            {...register("activity_name")}
            type="text"
            className="input"
            placeholder="Name of Event"
          ></input>
          <p>Start</p>
          <input
        {...register("start_date")}
        className="input"
        type="datetime-local"
      ></input>
          <p>End</p>
          <input
      {...register("end_date")}
        className="input"
        type="datetime-local"
      ></input>
      <p>Category</p>
          <select
            {...register("activity_category")}
            className="input"
          >
              <option value="1">llamadas</option>
              <option value="2">trotar</option>
              <option value="3">escribir</option>
              <option value="4">programar</option>
              <option value="5">leer</option>
              <option value="6">investigar</option>
              <option value="7">gimnasio</option>
              <option value="8">reunion</option>
              <option value="9">practicas</option>
              <option value="10">planear</option>
              <option value="11">descansar</option>
          </select>
          <button className="btn btn-primary" type="submit">Create Project</button>
        </form>
      </Layout>
    </>
  )
}
