import { Grid, Typography } from "@mui/material";
import { TextField, Button, FormControl, FormLabel } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from "react-router-dom";
import { useContact } from "../../src/component/hook/useContact";
import { useGlobalState } from "../../src/component/hook/UseglobalState";
import { sendSolicitud } from "../../src/component/services/ContactServices"; 
import Alert from '@mui/material/Alert';
import './Contacto.css'

const Contacto = ()=>{
  const { 
    alertContact,
    alertContactSuccess,
     setAlertContact,
    setAlertContactSuccess,
    timeContactAlert,
    timeContactAlertSuccess,
    
  } = useContact();
  
  const {
    nombre,
    changeNombre,
    correo,
    changeCorreo,
    telefono,
    changeTelefono,
    solicitud,
    changeSolicitud,
    comentario,
    changeComentario,} = useGlobalState();

  const handleSubmit = async (event) => {
      event.preventDefault();
      if(nombre ===    "" ||
         correo ===    "" ||
         telefono ===  "" ||
         solicitud === "" ||
         comentario === ""){
            setAlertContact(true)
            timeContactAlert()
         }else { 
          const  contact = {nombre,correo,telefono,solicitud,comentario}
          const  datos = await sendSolicitud( contact)
           setAlertContactSuccess(true)
           timeContactAlertSuccess()
         }
    };

    return(
        <Grid container>
            <Grid item md={12} xs={12} textAlign={'center'} style={{color:'green'}}>
              <Typography variant="h2">Contacto</Typography>
            </Grid>
          <Grid item md={6} xs={12} textAlign={'center'} style={{color:'orange'}} m={'auto'}>
             <Typography variant="h2">Necesitas mas Informacion?</Typography>
             <p>Tienes un proyecto en mente, y no sabes por donde empezar?</p><br />
             <p>Puedes escribirme directamente:</p>
             <p><MailIcon /> <span>andreschapu5259@gmail.com</span></p><br />
             <p><WhatsAppIcon /><NavLink style={{color:'orange', textDecoration:'none'}}> +5493884535200</NavLink></p>
             <p>Tambien puedes acceder al LINK de acceso directo a mis redes sociales al pie de la pagina.</p>
          </Grid>
            <Grid item md={6} xs={12}  textAlign={'center'} style={{backgroundColor:'gray' , borderRadius:'10px', padding:'10px',marginTop:'5px'}} >
            {
              alertContact &&  
                <Alert severity="error">Debes de llenar todos los campos!!!!!!</Alert>        
            }
            {  alertContactSuccess ?
              <Grid item>
                <Alert severity="success">Solicitud mandada con exito!!!!!! Puedes ver y editar en la seccion de SOLICITUDES.</Alert>
              </Grid>
               :
              <Grid item>
                <Typography variant="h5" mb={3}> Haz tu solicitud!!! </Typography>
                 <form onSubmit={handleSubmit}>
                    <FormControl>
                       <FormLabel style={{color:'white', fontSize:'20px'}}>Nombre</FormLabel>
                       <TextField id="outlined-basic" label="Nombre" variant="filled" size="normal" onChange={changeNombre}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Correo</FormLabel>
                       <TextField id="outlined-basic" label="Correo" variant="filled" size="normal" onChange={changeCorreo} />
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Telefono</FormLabel>
                       <TextField id="outlined-basic" label="Telefono" variant="filled" size="normal"  onChange={changeTelefono}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Solicitud</FormLabel>
                       <TextField id="outlined-basic" label="Solicitud" variant="filled" size="normal"  onChange={changeSolicitud}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Comentario</FormLabel>
                       <Textarea id="outlined-basic" label="Ingresa tu Comentario"  variant="soft" style={{ width:300, height:90}}  onChange={changeComentario}/>
                       </FormControl>
                 </form>
                       <Button type="submit" variant="outline" color="success" onClick={(event)=>{ handleSubmit(event)}}>Enviar</Button>
              </Grid>
            }

            </Grid>
        </Grid>
    )
}

export default Contacto;