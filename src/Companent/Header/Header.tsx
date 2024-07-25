import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";
import "./Header.css";
import ToComeIn from "../../pages/ToComeIn/ToComeIn";
import Cookies from "js-cookie";

function Header() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token')
        if (token){
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
    }, [])
    function logoHeader() {
        navigate("/");
    }

    function toggleBurgerMenu() {
        setIsBurgerOpen(!isBurgerOpen);
    }

    const handleLogin = () => {
        navigate("/login")
    }

    const handleLogout = () => {
        Cookies.remove("token");
        setLoggedIn(false);
    }
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header-logo">
                        <img
                            onClick={logoHeader}src="https://devkg.com/js/img/logo.458f2cd.svg"alt=""/>
                    </div>

                    <div className="header__nav">
                        <Link to="/vacancies">Вакансии</Link>
                        <Link to="/events">Мероприятия</Link>
                        <Link to="/video">Видео</Link>
                        <Link to="/organizations">Организации</Link>
                        <Link to="/community">Сообщество</Link>
                    </div>
                    <div className="header__menu-and-clicker">
                        <div
                            className="header__burger"
                            onClick={toggleBurgerMenu}
                        >
                            <div
                                className={`hamburger ${
                                    isBurgerOpen ? "is-active" : ""
                                }`}
                            >
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`burger-menu ${
                                isBurgerOpen ? "active" : ""
                            }`}
                        >
                            <nav className="burger-menu__list">
                                <Link to="/" onClick={toggleBurgerMenu}>
                                    <VscClose />
                                </Link>
                                <Link
                                    to="/vacancies"
                                    onClick={toggleBurgerMenu}
                                >
                                    Вакансии
                                </Link>
                                <Link to="/events" onClick={toggleBurgerMenu} >
                                    Мероприятия
                                </Link>
                                <Link to="/video" onClick={toggleBurgerMenu}>
                                    Видео
                                </Link>
                                <Link
                                    to="/organizations"
                                    onClick={toggleBurgerMenu}
                                >
                                    Организации
                                </Link>
                                <Link
                                    to="/community"
                                    onClick={toggleBurgerMenu}
                                >
                                    Сообщество
                                </Link>
                            </nav>
                        </div>
                        <div
                        style={{
                            display: loggedIn ? "block" : "none",
                        }}
                    >
                        <ToComeIn closeModal={() => {}} />
                    </div>
                        <div className="header__enter">
                            { loggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="products"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="products"
                                >
                                    <span>
                                        <SlArrowRightCircle />
                                    </span>
                                    <p>Login</p>
                                </button>
                             )}
                        </div>
                        <div className="header__enter__two">
                        { loggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="products"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="products"
                                >
                                    <span>
                                        <SlArrowRightCircle />
                                    </span>
                                </button>
                             )}
                        </div>
                              
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
