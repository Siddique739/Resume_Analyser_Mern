import React from 'react'
import style from './Login.module.css'

const Login = () => {
  return (
    <div>
        <div className={style.Login}>
            <div className={style.loginCard}>
                <div className={style.loginCardTitle}>
                    <h1>Login</h1>
                   <span className={style.icon}><ion-icon name="key-outline"></ion-icon></span> 
                </div>
                <div className={style.googlebtn}> <ion-icon    name="logo-google"></ion-icon> Sign in with Google</div>
            </div>

        </div>
   

      
    </div>
  )
}

export default Login
