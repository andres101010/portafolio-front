
import './Nav.css'
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import img from '../../assets/img/andres.jpg'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useState } from "react";



const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
    return(
        
         <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portafolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar1"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <NavLink to="/perfil" style={{color:'green', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif', fontSize:'20px'}} > Perfil </NavLink><br />
               <NavLink to="/proyectos"  style={{color:'green', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif',fontSize:'20px'}}>  Proyectos </NavLink><br />
               <NavLink to="/contacto"  style={{color:'green', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'20px'}}> Contacto </NavLink><br />
               <NavLink to="/solicitudes"  style={{color:'green', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'20px'}}> Solicitudes </NavLink><br />
               <NavLink to="/login"  style={{color:'green', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'20px'}}> Iniciar sesion </NavLink>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portafolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <NavLink to="/perfil" style={{color:'white', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif', fontSize:'25px', marginLeft:'100px'}} > Perfil </NavLink><br />
          <NavLink to="/proyectos"  style={{color:'white', fontWeight:'bold', textDecoration:'none', fontFamily:'sans-serif',fontSize:'25px', marginLeft:'20px'}}>  Proyectos </NavLink><br />
          <NavLink to="/contacto"  style={{color:'white', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'25px', marginLeft:'20px'}}> Contacto </NavLink><br />
          <NavLink to="/solicitudes"  style={{color:'white', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'25px', marginLeft:'20px'}}> Solicitudes </NavLink><br />
          <NavLink to="/login"  style={{color:'white', fontWeight:'bold', textDecoration:'none',fontFamily:'sans-serif',fontSize:'25px',marginLeft:'20px'}}> Iniciar sesion </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Andres" src={img} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar2"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
        
    )
}
export default Nav;