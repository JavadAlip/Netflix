import React from 'react';
import "./navBar/Navbar.css"; 

function NavBar() {
  return (
    <div className="navbar">
      <img className='logo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <img className='avatar'src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />  
      <div className='Headlines'>
        <p>Home</p>
        <p className='Headlines1'>TV Shows</p>
        <p className='Headlines2'>Movies</p>
      </div>
      
    </div>
    
  );
}

export default NavBar;
