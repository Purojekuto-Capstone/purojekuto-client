import React from 'react'

export default function Login() {
    return (

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
        </div>
        <button className="login__container--btn">Let's gooo!</button>
        <p className="login__container--p2"> By signing up, I agree to the <span>Privacy Policy</span>  and <span> Terms of service.</span>  </p>
    </div>
</div>
    )
}
