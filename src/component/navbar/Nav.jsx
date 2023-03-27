import { Box } from "@mui/system"
import './Nav.css'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { Typography } from "@mui/material";
import Fade from '@mui/material/Fade';
import { useState } from "react";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
    return(
        <Box>
            <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <MenuIcon /> <Typography variant="h6">Menu</Typography> 
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <NavLink to="/perfil" style={{color:'orange', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif', fontSize:'30px'}} > Mi perfil </NavLink><br />
        <NavLink to="/proyectos"  style={{color:'orange', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif',fontSize:'30px'}}> Mis Proyectos </NavLink><br />
        <NavLink to="/contacto"  style={{color:'orange', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'30px'}}> Contacto </NavLink><br />
        <NavLink to="/solicitudes"  style={{color:'orange', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'30px'}}> Solicitudes </NavLink><br />
        <NavLink to="/login"  style={{color:'orange', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'30px'}}> Login </NavLink>
        
      </Menu>
        </Box>
    )
}
export default Nav;