import React from 'react'
import {useRouter} from 'next/router'

export default function Login() {
    const router = useRouter()

    return (
        <div className="main__container">
            <div className="login__container">
                <h1 className="login__container--h1"> ジPurojekuto </h1>

<<<<<<< HEAD
<div className="main__container">
    <div className="login__container">
        <svg xmlns="http://www.w3.org/2000/svg" width="376" height="80" viewBox="0 0 376 80">
            <text id="ジPurojekuto_" data-name="ジPurojekuto " transform="translate(0 60)" fill="#f89f26" font-size="57" font-family="PingFangSC-Semibold, PingFang SC" font-weight="600"><tspan x="0" y="0">ジ</tspan><tspan y="0" font-family="Poppins-SemiBold, Poppins">Puroj</tspan><tspan y="0" font-family="Poppins-Light, Poppins" font-weight="300">ekuto </tspan></text>
        </svg>
        <div className='input__container'>
            <p className="login__container--p">Email</p>
            <input className="login__container--input" type="email" placeholder="  mail@mail.com" />
        </div>
        <div className='input__container'> 
            <p className="login__container--p" >Password</p>
            <input className="login__container--input" type="password" placeholder="  Super password" />
=======
                {/* TODO: @Antonn we need to change this login, we will use a single button like this => 
                https://yosoy.dev/wp-content/uploads/2018/11/Google-Sign-In.png  the link will redirect to and endpoint, meanwhile redirect to '/login/1234567890' */}

                <div className='input__container'>
                    <p className="login__container--p">Email</p>
                    <input className="login__container--input" type="email" placeholder="  mail@mail.com" />
                </div>
                <div className='input__container'> 
                    <p className="login__container--p" >Password</p>
                    <input className="login__container--input" type="password" placeholder="  Super password" />
                </div>
                <button className="login__container--btn" onClick={() => router.push('/login/1234567890')}>Let's gooo!</button>
                <p className="login__container--p2"> By signing up, I agree to the <span>Privacy Policy</span>  and <span> Terms of service.</span>  </p>
            </div>
>>>>>>> d0fdc294640029c4bf3e96b0692bf559adba11bb
        </div>
    )
}
