import React, { useContext, useState } from 'react';
import './Nav.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../contaxt/StoreContext';

const Nav = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };



  return (
    <div className="nav">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Navigation Menu */}
      <ul className="navmenu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a
          href='#ex-m' onClick={()=>setMenu("menu")}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </a>
        <a
          href='#ex-m' onClick={()=>setMenu("menu")} 
          className={menu === 'top-dishes' ? 'active' : ''}
        >
          Top Dishes
        </a>
        <a href='#app-d' onClick={()=>setMenu("mobile-app")} 
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          Mobile App
        </a>
        <a href='#footer'onClick={()=>setMenu("contact")} 
          className={menu === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <img src={assets.search_icon} alt="Search" className="nav-search-icon" />

        <div className="nav-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Add to Cart" />
          </Link>
          {/* Show cart badge only if there are items in the cart */}
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* Login / Profile */}
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="login-btn">
            Sign In
          </button>
        ) : (
          <div className="nav-pro">
            <img src={assets.profile_icon} alt="Profile" className="profile-icon" />
            <ul className="nav-pro-dro">
              <li onClick={handleLogout}>
                <img src={assets.bag_icon} alt="order" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
