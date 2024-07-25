import { useState } from 'react';
import Cookies from 'js-cookie'
import "./login.css"
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


const loginAPI = 'http://3.38.98.134/auth/login';


const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword]= useState('');

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginAPI, {
        userName: userName,
        password: password,
      })
      if (response.data.success){
        Cookies.set('token', response.data.token, { expires: 7 });
        navigate('/');
      }
      alert(response.data.message);
    }
    catch (error) {
      console.error('Login kilganda error chikti', error);
      alert("Login bolbodu");
    }

  }

  return (
    <>
    <Header />
    <div className='login__content'>
      <h1>Login</h1>
      <form className='form__info' onSubmit={handleLogin}>
          <input className='inputs'
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              placeholder="Username"
            />
            <input 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password" />
            <button  className='login-btn' type="submit">submit</button>
      </form>
      <div className='signup' >
          <h1>Not logged in?</h1>
          <a href='/signup'> SIGN UP</a>
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Login;