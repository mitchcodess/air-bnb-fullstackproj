// frontend/src/components/Navigation/index.js
import logo from '../../assets/HavenLandingLogo.svg'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
  <div >
    <div className='nav-bar__container'>
      <li>
        <NavLink exact to="/" className='nav-text'><img src={logo}/></NavLink>
      </li>
      {isLoaded && (
        <>
        <NavLink exact to ='/spots/new'> 
          Submit your Haven
        </NavLink>
        <li>
          <ProfileButton user={sessionUser} />
        </li>
        </>
      )}
    </div>
  </div>
  );
}

export default Navigation;