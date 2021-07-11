import React, {useState,useContext, useEffect} from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { postProyect, getCategory } from '../utils/services';
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
    }
    loadCategory();
  }, []);

  
  const onSubmit = async (data) => {
    postProyect(data, config)
    .then(res => {
      console.log(res.data);
      router.push(`/`);
    })
    .catch(err => {
      console.error(err)
    })
  };

  const [ flagView, setFlaView] = useState(true)

  const DetailProject = () => (
    <div className="container form__container">
    
      <h4 className="regular">Tell us more about your project</h4>
      <label className='mb-1'>How much time will you invert on it?<i>(weekly).</i></label>
      <input
        {...register("work_time")}
        className="input"
        placeholder="How much hours a week?"
        type="number" 
      />
      {errors.work_time && <span>This field is required</span>}
      <label className='mb-1'>How much time will you rest?<i>(daily)</i></label>
      <input
        {...register("break_time")}
        className="input"
        placeholder="How much hours a day?"
        type="number" 
      />
      <label className='mb-1'>When will you start it?</label>
      <input
      {...register("start_date")}
        className="input"
        type="date"
      ></input>
      <label className='mb-1'>When will you end it?</label>
      <input
        {...register("end_date")}
        className="input"
        type="date"
      ></input>
      <button className="btn btn-primary" type="submit">Create Project</button>
    </div>
  );
  
  const Project = () => (
    <>
          <h1>New project</h1>
          <h4 className='regular'>Let’s get started, tell us about your project.</h4>
  
          <fieldset className="input__container">
            <label htmlFor="formName" className="input__label" title="Nome:">
              What is your project's name?
            </label>
  
            <input
            {...register("project_name")}
              id="formName"
              className="input"
              name="project_name"
              type="text"
              placeholder="Awesome project"
            />
            
          </fieldset>

          <fieldset className="input__container">
            <label htmlFor="formUrl" className="input__label" title="Url:">
              What kind of project is it?
            </label>
  
            <select
              {...register("project_category")}
              id="formUrl"
              className="input"
            >
              <option value="1">Software</option>
              <option value="2">Documentation</option>
              <option value="3">Personal</option>
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
