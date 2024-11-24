


import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFeatherPointed, faGraduationCap, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagramSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ right: open });
  };

  const list = () => (
    <Box
      sx={{
        width: '100%', // Set width to 100% for full screen
        height: 'auto', // Maintain auto height
        backdropFilter: 'blur(10px)', // Apply blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for glass effect
        borderRadius: '0px', // No rounded corners for full screen
        color: "white",
        position: 'relative', // Set position relative for absolute positioning of CloseIcon
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Close Icon positioned at the top right */}
      <CloseIcon 
        onClick={toggleDrawer(false)} 
        sx={{ 
          position: 'absolute', 
          top: 16, // Adjust as needed
          right: 16, // Adjust as needed
          cursor: 'pointer',
          color: 'white' // Change color if needed
        }} 
      />
      <List>
		  
        <ListItem disablePadding >
          <ListItemButton>
			 	<FontAwesomeIcon icon={faUser} style={{fontSize : "2.9rem", marginRight : "10px", opacity : "0.8"}}/>
				<div style={{display : "flex", flexDirection : "column"}}> 

				<Link href='/signup'><h1 style={{fontSize : "1.4rem", fontWeight : "700", fontFamily : "Outfit, sans-serif"}}>Sign Up</h1></Link>
				<Link href='/signin'>
					<h5 style={{fontSize : "0.9rem", fontWeight : "500", color : "hsl(0, 0%, 70%)"}}>Do you have account?</h5>
				</Link>
				</div>
          </ListItemButton>
        </ListItem>
		  <hr />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
				<FontAwesomeIcon icon={faStar} />
            </ListItemIcon>
            <ListItemText primary="Features" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
				<FontAwesomeIcon icon={faGraduationCap} />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
				<FontAwesomeIcon icon={faFeatherPointed} />
            </ListItemIcon>
            <ListItemText primary="Our Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
				<FontAwesomeIcon icon={faPhone} />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </ListItem>
		  <ListItem disablePadding>
			<ListItemButton>
				<div
					style={{
					marginTop: "50px",
					fontSize: "1.4rem",
					fontWeight: "900",
					gap: "20px",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					color: "hsl(0, 0%, 70%)",
					width: "100%", // Ensure full width
					height: "100%", // Ensure full height
					}}
				>
					<FontAwesomeIcon icon={faFacebookF} />
					<FontAwesomeIcon icon={faInstagramSquare} />
					<FontAwesomeIcon icon={faGithub} />
					<FontAwesomeIcon icon={faXTwitter} />
				</div>

			</ListItemButton>
		  </ListItem>
		  <ListItem disablePadding>
			<ListItemButton>
				<div
					style={{
					marginTop: "35px",
					// fontSize: "1.4rem",
					// fontWeight: "900",
					gap: "20px",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					color: "hsl(0, 0%, 70%)",
					width: "100%", // Ensure full width
					height: "100%", // Ensure full height
					}}
				>
									<div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "35px" }}>
                    <h3 style={{
                        width: '350px',
                        fontFamily: 'Arvo, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: "hsl(45, 47%, 90%)"
                    }}>
                        Welcome to Our website, your trusted partner in the world of digital currency. Our platform offers secure, seamless, and user-friendly access to every coins, empowering you to manage, trade, and explore new financial opportunities.
                    </h3>
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <button style={{
                            backgroundColor: 'grey',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            cursor: 'pointer',
									fontWeight : "600"
                        }}>
                            Get Started
                        </button>
                    </div>

                </div>
				</div>

			</ListItemButton>
		  </ListItem>

		  
        


      </List>
      
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faBars} style={{color : "white", fontWeight : "900", fontSize : "1.9rem"}}/></Button>
      <SwipeableDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent', // Ensure the drawer itself is transparent
            backdropFilter: 'blur(10px)', // Apply blur to the drawer's background
            width: '100%', // Set width to 100% for full screen
            height: '100%', // Set height to 100% for full screen
            top: 0, // Align to the top of the viewport
            right: 0, // Align to the right of the viewport
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}


