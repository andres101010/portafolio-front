
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
import { useState } from 'react';
import Logaut from './component/logaut/Logaut';
import NotFound from '../rutas/notFound/NotFound';

// Custom Hooks app,js***
const useGlobalState = ()=>{
  const [isAllowed, setIsallowed] = useState(false);
  //Estados y funciones de solicitudes y contactos
  const [idsolicitudes, setIdSolicitudes] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [Solicitud, setSolicitud] = useState("");
  const [comentario, setComentario] = useState("");
  const changeNombre = (event) => {setNombre(event.target.value)};
  const changeCorreo = (event) => {setCorreo(event.target.value)};
  const changeTelefono = (event) => {setTelefono(event.target.value)};
  const changeSolicitud = (event) => {setSolicitud(event.target.value)};
  const changeComentario = (event) => {setComentario(event.target.value)};
  //***************************************************** */
  const getDataAllowed = (value)=>{
    if(value === ""){
      setIsallowed(false)
    }else{
      setIsallowed(true)
    }
  };
  return{
    getDataAllowed,
    isAllowed,
    setIsallowed,
    nombre,
    setNombre,
    correo,
    setCorreo,
    telefono,
    setTelefono,
    Solicitud,
    setSolicitud,
    comentario,
    setComentario,
    changeNombre,
    changeCorreo,
    changeTelefono,
    changeSolicitud,
    changeComentario,
    idsolicitudes,
    setIdSolicitudes
  }
}
// Aqui comienza el omponente app.js**************
const App = () => {
    const { getDataAllowed,
            isAllowed,
            setIsallowed,
            nombre,
            setNombre,
            correo,
            setCorreo,
            telefono,
            setTelefono,
            Solicitud,
            setSolicitud,
            comentario,
            setComentario,
            changeNombre,
            changeCorreo,
            changeTelefono,
            changeSolicitud,
            changeComentario,
            idsolicitudes,
            setIdSolicitudes
            } = useGlobalState()
   
  return (
    <Container maxWidth="x1">
     <BrowserRouter>      
      <Nav /> 
     <Routes>
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
        <Route path='/contacto' element={<Contacto 
        nombre={nombre}
        setNombre={setNombre}
        correo={correo}
        setCorreo={setCorreo}
        telefono={telefono}
        setTelefono={setTelefono}
        Solicitud={Solicitud}
        setSolicitud={setSolicitud}
        comentario={comentario}
        setComentario={setComentario}
        changeNombre={changeNombre}
        changeCorreo={changeCorreo}
        changeTelefono={changeTelefono}
        changeSolicitud={changeSolicitud}
        changeComentario={changeComentario}
        />}></Route>
        <Route element={ <ProtectedRoute isAllowed={isAllowed} />}>
          <Route path='/solicitudes' element={<Solicitudes 
           nombre={nombre}
           setNombre={setNombre}
           correo={correo}
           setCorreo={setCorreo}
           telefono={telefono}
           setTelefono={setTelefono}
           Solicitud={Solicitud}
           setSolicitud={setSolicitud}
           comentario={comentario}
           setComentario={setComentario}
           changeNombre={changeNombre}
           changeCorreo={changeCorreo}
           changeTelefono={changeTelefono}
           changeSolicitud={changeSolicitud}
           changeComentario={changeComentario}
           idsolicitudes={idsolicitudes}
           setIdSolicitudes={setIdSolicitudes}
          />}></Route>
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
