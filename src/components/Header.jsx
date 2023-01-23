import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    const [toggle, isToggled] = useState(false)
    const body = document.querySelector("body");
    const hideElements = function () {
        isToggled(false);
        body.classList.remove("menu-toggled");
    }
    const showElements = function () {
        isToggled(true);
        body.classList.add("menu-toggled")
    }

    return (
        <header className="header">
            <nav className="navigation" role="navigation">
                <Link to="/Home" className="logo--link">
                    <img className="logo" src={require("../images/Header-images/LOGO-min.png")} alt="logo firmy przedstawiające pracownika z młotkiem na dachu" height="125" width="156.5"></img>
                </Link>
                <div className="menu__links">
                    <Link to="/Home">Strona Główna</Link>
                    <Link to="/Offer">Oferta</Link>
                    <Link to="Realizations">Realizacje</Link>
                    <Link to="/Contact">Kontakt</Link>
                </div>
                <div className={`${toggle === true ? 'menu-active' : ''} menu-hidden`}>
                    <Link to="/Home" onClick={hideElements} className="home--menu">Strona główna</Link>
                    <Link to="/Offer" onClick={hideElements} className="offer--menu">Oferta</Link>
                    <Link to="/Realizations" onClick={hideElements} className="realizations--menu">Realizacje</Link>
                    <Link to="/Contact" onClick={hideElements} className="contact--menu">Kontakt</Link>
                </div>

                <img onClick={hideElements} src={require("../images/Header-images/close-icon.png")} className={`${toggle === true ? 'icon--active' : ''} icon--close`} alt="ikonka zamknięcia menu"></img>
                <img onClick={showElements} src={require("../images/Header-images/hamburger-icon.png")} className={`${toggle === true ? 'icon--inactive' : ''} menu__icon`} alt="ikonka otwarcia menu"></img>
            </nav>
        </header>
    );
}

export default Header;