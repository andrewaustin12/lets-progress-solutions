import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <span>Gmail</span>
        <span>Images</span>
        <span><AppsIcon/></span>
        <span className='navbar-avatar'><Avatar sx={{ bgcolor: deepPurple[500] }}>J</Avatar></span>
      </div>
    </div>
  );
};

export default NavBar