
import './App.css'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Title from './component/title/Title';
import Imagen from './component/img/Imagen';
import Nav from './component/navbar/Nav';
import Perfil from '../rutas/perfil/Perfil';
import Proyecto from '../rutas/proyectos/Proyectos';
import Contacto from '../rutas/contacto/Contacto';
import Solicitudes from '../rutas/solicitudes/Solicitudes';
import Login from '../rutas/login/Login';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const App = () => {
  

  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={
      <Box
      justifyContent={'center'}
      alignItems={'center'}
      >
        <Grid container>
         <Grid item> <Nav /> </Grid>
        </Grid>

        <Grid container textAlign={'center'}>
         <Grid item md={12}><Title /></Grid> 
        </Grid>

        <Grid container textAlign={'center'}>
         <Grid item md={12} xs={12}><Imagen /></Grid> 
        </Grid>
      </Box>
      }>
      </Route>
        <Route path='/perfil' element={<Perfil />}></Route>
        <Route path='/proyectos' element={<Proyecto />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/solicitudes' element={<Solicitudes />}></Route>
        <Route path='/login' element={<Login />}></Route>

     </Routes>
   </BrowserRouter>
    
  )
}

export default App
