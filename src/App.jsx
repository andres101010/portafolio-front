
import './App.css'
import {  BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import { Container } from '@mui/system';
import Footer from './component/footer/Footer';
import {ProtectedRoute} from './component/protectedRoute/ProtectedRoute'
import { useState } from 'react';
import Logaut from './component/logaut/Logaut';

const App = () => {
  const [isAllowed, setIsallowed] = useState(true);

  const getDataAllowed = (value)=>{
    if(value === ""){
      setIsallowed(false)
    }else{
      setIsallowed(true)
    }
  }
  console.log(isAllowed)
  return (
    <Container maxWidth="x1">

   <BrowserRouter>
        
     <Box width={' 100% '}>
     <Nav /> 
     </Box>
        
     <Routes>
      <Route path='/' element={<Navigate to={'/perfil'}/>}></Route>
      <Route path='/perfil' element={
      <Box>
        <Grid container textAlign={'center'}>
         <Grid item md={12}><Title /></Grid> 
        </Grid>

        <Grid container textAlign={'center'}>
         <Grid item md={12} xs={12}><Imagen /></Grid> 
        </Grid>
        
      </Box>
      }>
      </Route>
        <Route path='/proyectos' element={<Proyecto />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route element={ <ProtectedRoute isAllowed={isAllowed} />}>
          <Route path='/solicitudes' element={<Solicitudes />}></Route>
        </Route>
        <Route path='/login' element={<Login getDataAllowed={getDataAllowed} isAllowed={isAllowed} setIsallowed={setIsallowed}/>}></Route>
     </Routes>
   <Grid container spacing={2} textAlign={'center'}>
    <Grid item md={6} xs={6}>
      <Footer />
    </Grid>
     {
         isAllowed &&
         <Grid item style={{float:"right"}} md={6} mb={2}  xs={6}>
           <Logaut setIsallowed={setIsallowed}/>
         </Grid>
     }
   </Grid> 
   </BrowserRouter>
    </Container>
    
    
  )
}

export default App
