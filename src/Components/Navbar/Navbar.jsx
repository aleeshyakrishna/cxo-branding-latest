import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './NavbarImages/logo.png';
import { TiThMenuOutline } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.mainHead}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={`${styles.list} ${open ? styles.active : ''}`}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/jobs')}>Jobs</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
        <li onClick={() => navigate('/signup')}>Signup</li>
      </ul>
      <div className={styles.navIcons} onClick={handleClick}>
        {open ? <MdClose /> : <TiThMenuOutline />}
      </div>
    </div>
  );
}

export default Navbar;
