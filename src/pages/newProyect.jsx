import React, {useState,useContext, useEffect} from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postProyect,getCategory } from '../utils/services';
import { store } from '../context/store';
import { useRouter } from 'next/router';




const newProyect = () => {
  const { state } = useContext(store)
  const router = useRouter();
  const { isAuth, token } = state
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [category,setCategory] = useState([]);
  
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    async function loadCategory() {
      const response = await getCategory(config);

      if (response.status === 200) {
        setCategory(response.data);
      }
      /* setIsLoading(false); */
    }
    loadCategory();
  }, []);

  /* const PrintCategory  = {
    for ( project_category_name in category) {
      console.log(`${property}: ${object[property]}`);
    }
  }
 */
  
  const onSubmit = async (data) => {
    let projectJson = data;
    projectJson['user'] = '105807747967363609529'
    
    const response = await postProyect(projectJson,config);
    console.log(response)
    router.push(`/`);

  };
  console.log(category)

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
              Type Proyect 
            </label>
  
            <select
              {...register("project_category")}
              id="formUrl"
              className="input"
              name="Url"
              type="text"
            >
              <option value="4">software</option>
              <option value="5">documentacion</option>
              <option value="6">personal</option>
            </select>
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
          <a className='back-btn'>←Back</a>
          </Link>
        ) : (
          <a href="#" onClick={()=> handlerNext(true)}>
            <a className='back-btn'>←Back</a>
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
