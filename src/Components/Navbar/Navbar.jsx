import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from './Navbar.module.css';
import logo from './NavbarImages/logo.png';
import { TiThMenuOutline } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleStarredClick = () => {
    setShowForm(true);
    setDrawerOpen(false); // Close the drawer when the form is shown
  };

  const list = () => (
    <Box
      sx={{ width: 250, backgroundColor: 'black', color: 'whitesmoke' }} // Change the background color to black and text color to white
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Become a Mentor', 'Become a Freelancer', 'Become a CoFounder', 'Find An Inverstor','Become An Inverstor',
          'community of CEOs', 'Magazines for CEOs','Business Startup Ideas'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={text === 'Starred' ? handleStarredClick : null}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon style={{ color: 'white' }} /> : <MailIcon style={{ color: 'white' }} />} {/* Change icon color to white */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{ backgroundColor: 'white' }} /> {/* Change divider color to white */}
      <List>
        {['LogoId kit','Career Search Advice','Resume Writing','personalized websited','video Resume','Social Profile Management'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon style={{ color: 'white' }} /> : <MailIcon style={{ color: 'white' }} />} {/* Change icon color to white */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={styles.mainHead}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={`${styles.list} ${open ? styles.active : ''}`}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={toggleDrawer(true)}>Services</li> {/* Add Services to the list */}
        <li >About Us</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
        <li >Career</li>
        <li >Signup</li>
      </ul>
      <div className={styles.navIcons} onClick={handleClick}>
        {open ? <MdClose /> : <TiThMenuOutline />}
      </div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      {showForm && (
        <div className={styles.formContainer}>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
