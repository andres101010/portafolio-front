import { Grid, TextField, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Register from '/src/assets/img/register.png';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';
import axios from 'axios';



 const Registrarse = ({
   setShowRegister, 
   setShowLogin, 
   user, 
   password,
   setShowAlert,
   timeOutAlert,
   onChangeUser,
   onChangePassword
}) => {

 
    const[showCard, setShowCard] = useState (true);
   
    const sendRegister = (e) =>{
      e.preventDefault()
      if(user === "" || password === ""){
        setShowAlert(true)
        timeOutAlert()
      }else{
       axios.post('http://portafolio-back-production-10.up.railway.app/login/crear-usuario', {
        user: user,
        password: password
       }).then((resp)=>{
         setShowCard(false)
         time()
       }).catch((err)=>{
        console.log(err)
       })
      }
    }
    const regresar = ()=>{
       setShowLogin(true)
       setShowRegister(false)
    }
    const time = ()=>{
      setTimeout(()=>{
        setShowCard(true)
        setShowLogin(true)
        setShowRegister(false)
      },5000)
    }
  return (
    <Grid container spacing={2}>


        <Grid item  md={12} xs={12} mt={5} textAlign={'center'} style={{color:'green'}}>
          <Typography variant='h2'>
            Registrarse
          </Typography>
        </Grid>

        { 
        !showCard ?  
        <Grid item md={12} height="400px" mt={6} ml={2}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Felicidades ya creaste tu cuenta! <strong>Ya puedes iniciar sesion para acceder a las solicitudes..!</strong>
        </Alert>  
        </Grid>
        :
        <Grid item md={12} xs={12} ml={2} >
         
        <Card sx={{maxWidth: 500, height:'500', margin:"auto", marginBottom:2}}>
        <CardActionArea>
      <CardMedia
        sx={{ height: 200 }}
        image={Register}
        title="Register"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'green'}>
          Crea tu cuenta!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          En este espacio de la aplicacion puedes crear tu cuenta.
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardContent>
      <TextField id="user"  label="Usuario" variant="outlined" onChange={onChangeUser} />
      <TextField id="password" type="password" label="contraseña" variant="outlined" onChange={onChangePassword} />
      </CardContent>
      
      <CardActions>
        <Button size="small" color="success"  variant="outlined" onClick={(e)=>{sendRegister(e)}}>Crear Cuenta</Button>
        <Button size="small" color="error"  variant="outlined" onClick={()=>{regresar()}}>Regresar</Button>
      </CardActions>
    </Card>
        </Grid>

        }

    </Grid>
  )
}
export default Registrarse;