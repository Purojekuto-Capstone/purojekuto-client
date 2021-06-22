

import React from 'react'
import Layout from '../components/layout/layout'

export default function Login() {
    return (



<Layout>
    <div className='container'>
            <a>Back</a>
            <h1 className='container__h1'>New Project</h1>
            <h4>New set up a calendar</h4> 
                <p>What kind of project is it?</p>
                    <input className="login__container--input" placeholder="Select a type of project"></input> 
                <p>When will you complete it?</p> 
                    <input className="login__container--input" placeholder="Enter a deadline"></input>
                <p>Select calendar to work with</p> 
                    <input className="login__container--input" placeholder="Please, select a calendar"></input>
                    <button className= 'btn btn-primary'>Create Project</button>     
    </div>
</Layout>  
    
)
}
