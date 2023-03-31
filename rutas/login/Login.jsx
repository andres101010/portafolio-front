
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import login2 from '/src/assets/img/login2.png';
import './Login.css';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import  Registrarse  from '../../src/component/registrarse/Registrarse';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Solicitudes from '../solicitudes/Solicitudes';
import { LocalStorage } from '../../src/component/LocalStorage';

const Login = ({getDataAllowed})=>{
  const [user, setUser] = LocalStorage('user','');
  const [password, setPassword] = LocalStorage('password','');
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertValidationError, setShowAlertValidationError] = useState(false);
  console.log(localStorage)
  const onChangeUser = (event) => { setUser(event.target.value)} 
  const onChangePassword = (event) => { setPassword(event.target.value)} 
  console.log(user,password)
  const register = ()=>{
    setShowLogin(false)
    setShowRegister(true)
  }

  const timeOutAlert = () => {
    setTimeout(()=>{
      setShowAlert(false)
    }, 2000)
  }

  const timeOutAlertValidation = () => {
    setTimeout(()=>{
      setShowAlertValidationError(false)
    }, 2000)
  }
  

  const inicioSesion = () =>{
    if(user === "" || password === ""){
        setShowAlert(true)
        timeOutAlert()
    }else{
       axios.post('http://localhost:3001/login', {
        user: user,
        password: password
       }).then((res)=>{
         getDataAllowed(res.data)
         navigate('/solicitudes')
         setShowLogin(false)
        
       }).catch((err)=>{
        console.log(err)
        setShowAlertValidationError(true)
        timeOutAlertValidation()
       })
    }
  }

  // useEffect(()=>{
  //  const storedUser = localStorage.setItem('user', user);
  //  const storedPassword = localStorage.setItem('password', password);
  // 
  //   if (storedUser && storedPassword) {

  //     setUser(storedUser);
  //     setPassword(storedPassword);
  //   
  //     console.log(user,password,isAllowed)
  //   }
  // }, [user,password]);

   const navigate = useNavigate()
  
    return(
        <Grid container spacing={2} > 
        {
          showAlert && 
          <Grid item px={5} md={6} xs={12} style={{margin:"auto"}}>
            <Alert severity="error">Debes de llenar todos los campos</Alert>
          </Grid>
        }
        {
          showAlertValidationError && 
          <Grid item px={5} md={6} xs={12} style={{margin:"auto"}}>
            <Alert severity="error">Usuario o contraseña invalido!</Alert>
          </Grid>
        }
        {
          showLogin ?
           <Grid container>
          <Grid item md={12} textAlign={'center'} style={{color:'green'}}>
            <Typography variant="h2">Inicio de sesion</Typography>
          </Grid>
          <Grid item  md={12} xs={12} ml={2} >
            <Card sx={{ maxWidth: 500, height:"500", margin:'auto', marginBottom:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
           image={login2}
          alt="programing"
        />
        <CardContent >
          <Typography gutterBottom variant="h4" component="div" color={'green'}>
            Inicio de sesion
          </Typography>
          <Typography variant="body1" color="text.secondary">
            En esta opcion de inicio de secion, podras tener la ventaja de aceder a la lista de 
            solicitudes mandadas para que puedas hacer un seguimiento sobre tu peticion.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <TextField id="user" label="Usuario" variant="outlined"   onChange={onChangeUser} />
      <TextField id="password" type="password" label="contraseña" variant="outlined" onChange={onChangePassword}  />
      </CardContent>
      <CardActions>
        <Button size="small" color="success"  variant="outlined" onClick={()=>{inicioSesion()}}>
          Iniciar secion
        </Button>
        <Button size="small" color="primary" variant="outlined" onClick={()=>{register()}}>
          Registrarse
        </Button>
      </CardActions>
    </Card>
          </Grid>
           </Grid> :
           <Solicitudes user={user} />
        }
        {
            showRegister &&
            <Grid container>
            <Grid item md={12} xs={12} > 
                <Registrarse setShowLogin={setShowLogin} setShowRegister={setShowRegister} user={user} password={password} 
                 setShowAlert={ setShowAlert} timeOutAlert={timeOutAlert}
                 onChangeUser={onChangeUser} onChangePassword={onChangePassword}
                />
             </Grid>

            </Grid>
          }
         
        </Grid>
          
    )
}

export default Login;