
import React, { useState, useEffect } from 'react';
import "../assets/Navbar.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burger from "../assets/burger.svg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.avatar')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header>
      <div className="header__left">
        <img className="logo" src={logo} alt="Netflix" />
        <nav>
          <a className="">Découverte</a>
          <a className="">Séries TV</a>
          <a className="">Films</a>
          <a className="">Programmes originaux</a>
          <a className="">Ajouts récents</a>
          <a className="">Ma liste</a>
        </nav>
      </div>
      <a className="burger">
        <img className="burger__icon" src={burger} alt="Menu" />
      </a>
      <div className="header__right">
        <a>
          <img src={search} alt="Rechercher" />
        </a>
        <a>Jeunesse</a>
        <a>
          <img src={notification} alt="Notifications" />
        </a>
        <a className="avatar" onClick={toggleDropdown}>
          <img src={avatar} alt="Avatar" />
          <img className="avatar__dropdown" src={dropdown} alt="Dropdown" />
        </a>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href="/profile">Profil</a>
            <a href="/settings">Paramètres</a>
            <a href="/logout">Déconnexion</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;