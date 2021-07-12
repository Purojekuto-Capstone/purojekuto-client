import React from 'react'
import mockup from '../assets/images/mockup.png'
import logo from '../assets/images/Purojekuto-light.svg'
import Link from 'next/link'

export default function Landing(props) {
  return (
    <div className='landing__container'>
      <nav className='landingHeader__container'>
        <img className='img-fluid logo' src={logo} alt='Purojekuto project planner '/>
        <Link href='/login'>
          <div className='btn landing__btn desktop'> Sign up</div>
        </Link>
      </nav>

      

      <div className='ladingBody__container'>
        <div className='title__container'>
          <h1 className='headTitle desktop'>The <span className='organge-text'>Project<br/>
          Planner</span><br/>
          for <span>Project<br/>
          Managers.</span></h1>
          <h1 className='headTitle'>The <span className='organge-text'>Project Planner </span>
          for <span> Project Managers.</span></h1>
          <p className='description mobile'>
          <b>Purojekuto</b> lets project managers to <b>centralize all their projects in one place</b>, create and handle projects, add events and <b>sync it with your google calendar account</b>. Take a look at how much time you spend in each project and check your events on our calendar.
          </p>
        </div>

        <Link href='/login'>
            <div className='btn landing__btn mobile'> Sign up</div>
        </Link>

        <div className='mockup__container'>
          <img className='img-fluid mockup' src={mockup} alt='Purojekuto the project planner for project managers'/> 
        </div>
      </div>

      
    </div>
  )
}
