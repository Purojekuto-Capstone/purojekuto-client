import React, {useState} from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postProyect } from '../utils/services';




const newProyect = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  /* const onSubmit = async (data) => {
    const response = await postProyect(data);
    console.log(response)

  }; */

  const [ flagView, setFlaView] = useState(true)

  const DetailProject = () => (
    <div className="container">
    
      <h1 className="container__h1">New Project</h1>
      <h4>New set up a calendar</h4>
      <p>What kind of project is it?</p>
      <input
        /* {...register("typeProject", {required:true})} */
        {...register("typeProject")}
        className="login__container--input"
        placeholder="  Select a type of project"
      />
      {errors.typeProject && <span>This field is required</span>}
      <p>When will you complete it?</p>
      <input
      {...register("deadline")}
        className="login__container--input"
        placeholder="  Enter a deadline"
      ></input>
      <p>Select calendar to work with</p>
      <input
        {...register("calendar")}
        className="login__container--input"
        placeholder="  Please, select a calendar"
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
            {...register("name")}
              id="formName"
              className="input"
              name="name"
              type="text" /* required */ /* onChange={this.handleChange} */ /* value={this.state.name} */
            />
            
          </fieldset>
  
          <fieldset className="input__container">
            <label htmlFor="formUrl" className="input__label" title="Url:">
              Proyect url
            </label>
  
            <input
            {...register("url")}
              id="formUrl"
              className="input"
              name="Url"
              type="text"
              required /* onChange={this.handleChange} */ /* value={this.state.email} */
            />
          </fieldset>
  
          <fieldset className="input__container">
            <label
              htmlFor="formMessage"
              className="input__label"
              title="Mensagem:"
            >
              description
            </label>
  
            <textarea
            {...register("message")}
              id="formMessage"
              className="form-textarea"
              name="message"
              required /* onChange={this.handleChange} */
            ></textarea>
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
