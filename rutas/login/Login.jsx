
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import login2 from '/src/assets/img/login2.png';
import './Login.css';
import TextField from '@mui/material/TextField';
import  Registrarse  from '../../src/component/registrarse/Registrarse';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useLogin } from '../../src/component/hook/useLogin';
import { sendLogin } from '../../src/component/services/ContactServices';

const Login = ({getDataAllowed})=>{

  const { idlogin,
          user,
          password,
          showRegister,
          setShowRegister,
          showLogin,
          setShowLogin,
          showAlert,
          setShowAlert,
          showAlertValidationError,
          onChangeUser,
          onChangePassword,
          register,
          timeOutAlert,
          timeOutAlertValidation,      
          setShowAlertValidationError     
         } = useLogin()
 

  const inicioSesion = async () =>{
     try {
       if(user === "" || password === "" ){
         setShowAlert(true)
         timeOutAlert()
       }else{
         const dataUser = {user, password}
         const datos = await sendLogin(dataUser)
         getDataAllowed(datos)
         console.log(datos)
         navigate('/solicitudes')
         setShowLogin(false) 
       }
     } catch (error) {
      console.log(error)
       setShowAlertValidationError(true)
       timeOutAlertValidation()  
     }
  }

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
          <Grid item px={5} md={6} xs={12} style={{margin:"auto", marginTop:'30px'}}>
            <Alert severity="error">Usuario o contraseña invalido!</Alert>
          </Grid>
        }
        {
          showLogin &&
           <Grid container>
          <Grid item md={12} mt={5} textAlign={'center'} style={{color:'green'}}>
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
            En esta opcion de inicio de sesion, podras tener la ventaja de aceder a la lista de 
            solicitudes mandadas para que puedas editar, borrar tu solicitud si lo deseas.
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
           </Grid> 
        
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