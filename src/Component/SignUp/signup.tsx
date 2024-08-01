import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./signup.css"
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const loginAPI = "http://3.38.98.134/auth/signup";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [congirmPassword, setCongirmPassword] = useState("");
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginAPI, {
        userName: userName,
        password: password,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token, { expires: 7 });
        navigate("/");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Signup kilganda error chikti", error);
      alert("Signup bolbodu");
    }
  };

  return (
    <>
      <Header/>
        <div className="container">
            <div className="signup__block">
            <section className="singup__content">
                <h1>Зарегистрироваться</h1>
              <div className="inputs">
                <form  className="form__info" onSubmit={handleSignup}>
                    <input className="inputs"
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
                            placeholder="Password"
                    />
                         <input
                            type="password"
                            id="password"
                            value={congirmPassword}
                            onChange={(e) => setCongirmPassword(e.target.value)}
                            name="password"
                            placeholder="Password"
                    />
                        <button className="addbtn" type="submit">Зарегистрироваться</button>
                  </form>
                </div>
                <div className="signup">
                    <h1>Зарегистрировано</h1>
                    <a href="/login"> Авторизоваться</a>
                </div>
            </section>
            </div>
        </div>
      <Footer />
    </>
  );
};
export default Signup;