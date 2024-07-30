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
import Modal from 'react-modal';
import Form from '../Form/Form';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Set app element for accessibility
Modal.setAppElement('#root'); // Ensure this matches your root element

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      padding: '20px',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: '1000',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '999',
    },
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleListItemClick = (text) => {
    switch (text) {
      case 'Become a Mentor':
      case 'Become a Freelancer':
      case 'Become a CoFounder':
      case 'Find An Investor':
      case 'Become An Investor':
      case 'community of CEOs':
      case 'Magazines for CEOs':
      case 'Business Startup Ideas':
        setShowForm(true);
        break;

      case 'LogoId kit':
        navigate('/services/personalBranding');
        break;
      case 'Career Search Advice':
        navigate('/services/jobSearchAdvice');
        break;
      case 'Resume Writing':
        navigate('/services/resume');
        break;
      case 'personalized website':
        navigate('/services/personalBranding');
        break;
      case 'video Resume':
        navigate('/services/personalBranding');
        break;
      case 'Social Profile Management':
        navigate('/services/socialmediaManagement');
        break;
      default:
        break;
    }
    setDrawerOpen(false); // Close the drawer when an item is clicked
  };

  const handleCloseFormModal = () => {
    setShowForm(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250, backgroundColor: 'black', color: 'whitesmoke' }} // Change the background color to black and text color to white
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Become a Mentor', 'Become a Freelancer', 'Become a CoFounder', 'Find An Investor', 'Become An Investor',
          'community of CEOs', 'Magazines for CEOs', 'Business Startup Ideas'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text)}>
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
        {['LogoId kit', 'Career Search Advice', 'Resume Writing', 'personalized website', 'video Resume', 'Social Profile Management'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text)}>
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
        <li onClick={() => navigate('/aboutUs')}>About Us</li>
        <li onClick={() => navigate('/contact')}>Contact Us</li>
        <li onClick={() => navigate('/user/register')}>Become A Member</li>
        <li onClick={() => navigate('/user/login')}>Login</li>
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
      <Modal
        isOpen={showForm}
        onRequestClose={handleCloseFormModal}
        style={customStyles}
        contentLabel="Get Support Form"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={handleCloseFormModal}>
          <AiOutlineCloseCircle />
        </span>
        <Form />
      </Modal>
    </div>
  );
}

export default Navbar;
