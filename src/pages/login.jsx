import React from 'react'

export default function Login() {
    return (

<div className="main__container">
    <div className="login__container">
        <h1 className="login__container--h1"> ジPurojekuto </h1>
        <div className='input__container'>
            <p className="login__container--p">Email</p>
            <input className="login__container--input" type="email" placeholder="  mail@mail.com" />
        </div>
        <div className='input__container'> 
            <p className="login__container--p" >Password</p>
            <input className="login__container--input" type="password" placeholder="  Super password" />
        </div>
        <button className="login__container--btn">Let's gooo!</button>
        <p className="login__container--p2"> By signing up, I agree to the <span>Privacy Policy</span>  and <span> Terms of service.</span>  </p>
    </div>
</div>
    )
}
