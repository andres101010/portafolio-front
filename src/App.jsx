
import './App.css'
import {  BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Title from './component/title/Title';
import Imagen from './component/img/Imagen';
import Nav from './component/navbar/Nav';
import Proyecto from '../rutas/proyectos/Proyectos';
import Contacto from '../rutas/contacto/Contacto';
import Solicitudes from '../rutas/solicitudes/Solicitudes';
import Login from '../rutas/login/Login';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Footer from './component/footer/Footer';
import {ProtectedRoute} from './component/protectedRoute/ProtectedRoute'
import Logaut from './component/logaut/Logaut';
import NotFound from '../rutas/notFound/NotFound';
import { useGlobalState } from './component/hook/UseglobalState';

// Aqui comienza el omponente app.js**************
const App = () => {
    const { getDataAllowed,
            isAllowed,
            setIsallowed,
            } = useGlobalState()
   
  return (
    <Container maxWidth="x1">
     <BrowserRouter>      
      <Nav /> 
     <Routes>
     <Route path='/portafolio-front' element={<Navigate to={'/perfil'}/>}></Route>
      <Route path='/' element={<Navigate to={'/perfil'}/>}></Route>
      <Route path='/perfil' element={
        <Grid container spacing={2}>
      <Grid item md={4}>
        <Title />
      </Grid>
      <Grid item md={8} >
        <Imagen />
      </Grid>
        </Grid>
      }>
      </Route>
        <Route path='/proyectos' element={<Proyecto />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route element={ <ProtectedRoute isAllowed={isAllowed} />}>
          <Route path='/solicitudes' element={<Solicitudes />}></Route>
        </Route>
        <Route path='/login' element={<Login getDataAllowed={getDataAllowed} isAllowed={isAllowed} setIsallowed={setIsallowed}/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
     </Routes>
 
      <Footer />
   
     {
         isAllowed &&
      
           <Logaut setIsallowed={setIsallowed}/>
        
     }
   
   </BrowserRouter>
    </Container>
    
    
  )
}

export default App
