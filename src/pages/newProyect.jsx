import React, {useState} from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postProyect } from '../utils/services';




const newProyect = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  

  
  const onSubmit = async (data) => {
    let projectJson = data;
    projectJson['user'] = '105807747967363609529'
    
    const response = await postProyect(projectJson);
    console.log(response)

  };

  const [ flagView, setFlaView] = useState(true)

  const DetailProject = () => (
    <div className="container">
    
      <h1 className="container__h1">New Project</h1>
      <h4>New set up a calendar</h4>
      <p>How long does it take?</p>
      <input
        /* {...register("typeProject", {required:true})} */
        {...register("work_time")}
        className="login__container--input"
        placeholder="  How long does it take?"
        type="number" 
      />
      {errors.work_time && <span>This field is required</span>}
      <p>what is you break time?</p>
      <input
        {...register("break_time")}
        className="login__container--input"
        placeholder="  what is you break time?"
        type="number" 
      />
      <p>When will you complete it?</p>
      <input
      {...register("end_date")}
        className="login__container--input"
        /* placeholder="  Enter a deadline" */
        type="date"
      ></input>
      <p>Select calendar to work with</p>
      <input
        {...register("start_date")}
        className="login__container--input"
        /* placeholder="  Please, select a calendar" */
        type="date"
      ></input>
     {/*  <Link href="/"> */}
      <button className="btn btn-primary" type="submit">Create Project</button>
     {/*  </Link> */}
    </div>
  );
  
  const Project = () => (
    <>
          <h1>New project</h1>
          <h4>Let’s get started by naming your project.</h4>
  
          <fieldset className="input__container">
            <label htmlFor="formName" className="input__label" title="Nome:">
              Proyect name
            </label>
  
            <input
            {...register("project_name")}
              id="formName"
              className="input"
              name="project_name"
              type="text" /* required */ /* onChange={this.handleChange} */ /* value={this.state.name} */
            />
            
          </fieldset>
  
          <fieldset className="input__container">
            <label htmlFor="formUrl" className="input__label" title="Url:">
              Proyect url
            </label>
  
            <input
            /* {...register("url")} */
              id="formUrl"
              className="input"
              name="Url"
              type="text"
              placeholder=" @proyectoname"
              disabled
              /* onChange={this.handleChange} */ /* value={this.state.email} */
            />
          </fieldset>
  
         
  
          <div className="input__container">
            <input
              id="formButton"
              value="Next"
              className="btn btn-primary"
              type="button"
              placeholder="Send message"
              onClick={()=>handlerNext(false)}
            />
          </div>
          </>
  )

    const handlerNext = (val) => {
      setFlaView(val)
    }
   

  return (
    <Layout>
      <form className="react-form" onSubmit={handleSubmit(onSubmit)}>
      
      {flagView ? (
         <Link href="/">
         <a>←Back</a>
       </Link>
        ) : (
          <a href="#" onClick={()=> handlerNext(true)}>
            <a>←Back</a>
          </a>
        )}

        {
          flagView ? <Project /> : <DetailProject />
        }
        
      </form>
    </Layout>
  );
};

export default newProyect;
