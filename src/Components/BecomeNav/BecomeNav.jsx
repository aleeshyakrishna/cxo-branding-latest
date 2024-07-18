import React from 'react';
import styles from './BecomeNav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Form from '../Form/Form';

function BecomeNav() {
  

    return (
        <div className={styles.mainBecom}>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#jobModal">
                Looking for a Job?
            </button> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#jobModal">
 Business Startup Ideas
</button>

            <button type="button" className="btn btn-success">
                Start Something on Your Own?
            </button>
            <button type="button" className="btn btn-danger">
                Community of CEOs
            </button>
            <button type="button" className="btn btn-warning">
            Looking for a Job?
            </button>
            <button type="button" className="btn btn-info">
                Podcasts for CXOs
            </button>
            <button type="button" className="btn btn-danger">
                Join our Meetup-group
            </button>
            <button type="button" className="btn btn-warning">
            Become a Freelancer
            </button>
<div className={styles.modalDiv}>

    <div  className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="jobModalLabel">Looking for a Job?</h5> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Form />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
</div>

        </div>
    );
}

export default BecomeNav;




            // import React, { useState } from 'react';
            // import Box from '@mui/material/Box';
            // import Drawer from '@mui/material/Drawer';
            // import Button from '@mui/material/Button';
            // import List from '@mui/material/List';
            // import Divider from '@mui/material/Divider';
            // import ListItem from '@mui/material/ListItem';
            // import ListItemButton from '@mui/material/ListItemButton';
            // import ListItemIcon from '@mui/material/ListItemIcon';
            // import ListItemText from '@mui/material/ListItemText';
            // import InboxIcon from '@mui/icons-material/MoveToInbox';
            // import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
            // import MailIcon from '@mui/icons-material/Mail';
            // import styles from './BecomeNav.module.css';
            // import 'bootstrap/dist/css/bootstrap.min.css';
            
            // function BecomeNav() {
            //   const [state, setState] = useState({
            //     left: false,
            //   });
            //   const [showForm, setShowForm] = useState(false);
            
            //   const toggleDrawer = (anchor, open) => (event) => {
            //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            //       return;
            //     }
            
            //     setState({ ...state, [anchor]: open });
            //   };
            
            //   const handleStarredClick = () => {
            //     setShowForm(true);
            //   };
            
            //   const list = (anchor) => (
            //     <Box
            //       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            //       role="presentation"
            //       onClick={toggleDrawer(anchor, false)}
            //       onKeyDown={toggleDrawer(anchor, false)}
            //     >
            //       <List>
            //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            //           <ListItem key={text} disablePadding>
            //             <ListItemButton onClick={text === 'Starred' ? handleStarredClick : null}>
            //               <ListItemIcon>
            //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            //               </ListItemIcon>
            //               <ListItemText primary={text} />
            //             </ListItemButton>
            //           </ListItem>
            //         ))}
            //       </List>
            //       <Divider />
            //       <List>
            //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
            //           <ListItem key={text} disablePadding>
            //             <ListItemButton>
            //               <ListItemIcon>
            //                 {index % 2 === 0 ? <PortraitSharpIcon /> : <MailIcon />}
            //               </ListItemIcon>
            //               <ListItemText primary={text} />
            //             </ListItemButton>
            //           </ListItem>
            //         ))}
            //       </List>
            //     </Box>
            //   );
            
            //   return (
            //     <div>
            //       <div className={styles.mainBecom}>
            //         <React.Fragment key="left">
            //           <Button onClick={toggleDrawer('left', true)}>Our Services</Button>
            //           <Drawer
            //             anchor="left"
            //             open={state.left}
            //             onClose={toggleDrawer('left', false)}
            //           >
            //             {list('left')}
            //           </Drawer>
            //         </React.Fragment>
            //       </div>
            //       {showForm && (
            //         <div className={styles.formContainer}>
            //           <form>
            //             <div className="mb-3">
            //               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            //               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            //               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            //             </div>
            //             <div className="mb-3">
            //               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            //               <input type="password" className="form-control" id="exampleInputPassword1" />
            //             </div>
            //             <div className="mb-3 form-check">
            //               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            //               <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            //             </div>
            //             <button type="submit" className="btn btn-primary">Submit</button>
            //           </form>
            //         </div>
            //       )}
            //     </div>
            //   );
            // }
            
            // export default BecomeNav;
            