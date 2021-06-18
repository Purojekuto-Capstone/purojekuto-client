import React from 'react'

export default function Login() {
    return (

<div className="main__container">
    <div className="login__container">
        <h1 className="login__container--h1"> ジPurojekuto </h1>
        <div className='input__container'>
            <input className="login__container--input" type="email" placeholder="  Nombre Completo" />
        </div>
        <div className='input__container'> 
            <input className="login__container--input" type="password" placeholder="  mail@mail.com" />
        </div>
        <div className='input__container'>
            <input className="login__container--input" type="email" placeholder="  Password" />
        </div>
        <div className='input__container'> 
            <input className="login__container--input" type="password" placeholder="  Confirm password" />
        </div>
        <button className="login__container--btn">Suscribe!</button>
        <button className="login__container--btn">Suscribe with Google!</button>
        <p className="login__container--p2"> By signing up, I agree to the  <span>Privacy Policy</span>  and  <span> Terms of service.</span></p>
    </div>
</div>
    )
}