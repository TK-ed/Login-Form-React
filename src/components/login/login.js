import React, { useState } from 'react'
import '../login/login.css'

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-up")
        setTimeout(() => showPopup("hide"),3000)
    }


    return (
        <div className='cover'>
            <h1 className='texty'>Login</h1>
            <input className='name' type='text' placeholder='username' />
            <input className='pass' type='password' placeholder='password' />

            <div className='login-btn'>Login</div>

            <p className='text'>Or login using</p>

            <div className='alt-login'>
                <div className='github'>
                    <a href="" />
                </div>
                <div className='google'>
                    <a href="" />
                </div>
            </div>
        </div>
    )
}

export default Login