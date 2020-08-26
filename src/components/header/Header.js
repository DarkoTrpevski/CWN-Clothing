import React from 'react';
import { Link } from 'react-router-dom';
//Import firebase auth
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className = "Header">

      <Link to = "/" className = "logo-container">
        <Logo className = "logo"/>
      </Link>
      <div className="options">
        <Link to = "/shop" className = "option">Shop</Link>
        <Link to = "/shop" className = "option">Contact</Link>
        {
          currentUser
          ? <div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div>
          : <Link className = "option" to = "/signin">SIGN IN</Link>
        }
      </div>
      
    </div>
  )
}

export default Header;