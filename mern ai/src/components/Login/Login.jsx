import React, { useContext } from "react";
import style from "./Login.module.css";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const Login = () => {
  const { isLogin, setLogin, userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      }

      const postdata = await axios.post('/api/user',userData).then((response)=>{
        setUserInfo(response.data.user);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      }).catch(err=>{
        console.log(err);
      })

        setLogin(true);
        
        localStorage.setItem("isLogin", true);
        
        navigate('/dashboard');
    } catch (err) {
        alert("Something went wrong");
        console.log(err);
    }
  };

  return (
    <div>
      <div className={style.Login}>
        <div className={style.loginCard}>
          <div className={style.loginCardTitle}>
            <h1>Login</h1>
            <span className={style.icon}>
              <ion-icon name="key-outline"></ion-icon>
            </span>
          </div>
          <div className={style.googlebtn} onClick={handleLogin}>
            {" "}
            <ion-icon name="logo-google"></ion-icon> Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
