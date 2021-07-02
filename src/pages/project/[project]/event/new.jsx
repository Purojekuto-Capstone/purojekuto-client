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
  /* const onSubmit = data =>{
    data['user'] = '105807747967363609529';
    data['project'] = 'ajbo2rim0502o9p45ei98j0ugo@group.calendar.google.com';
    console.log(data);
  }  */
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
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div onClick={handleBack} >
          <a className='back-btn'>←Back</a>
          </div>
          <h1 className="container__h1">New event</h1>
          <p>Name</p>
          <input
            {...register("activity_name")}
            type="text"
            className="login__container--input"
            placeholder="  Select a type of project"
          ></input>
          <p>Start</p>
          <input
        {...register("start_date")}
        className="login__container--input"
        /* placeholder="  Please, select a calendar" */
        type="datetime-local"
      ></input>
          <p>End</p>
          <input
      {...register("end_date")}
        className="login__container--input"
        /* placeholder="  Enter a deadline" */
        type="datetime-local"
      ></input>
      <p>Category</p>
          <select
           {...register("activity_category")}
            className="login__container--input"
          >
              <option value="9">software</option>
              <option value="10">documentacion</option>
              <option value="11">personal</option>
              <option value="12">personal</option>
              <option value="13">personal</option>
              <option value="14">personal</option>
              <option value="15">personal</option>
              <option value="16">personal</option>
              <option value="17">personal</option>
              <option value="18">personal</option>
              <option value="19">personal</option>
          </select>
          <button className="btn btn-primary" type="submit">Create Project</button>
        </form>
      </Layout>
    </>
  )
}
