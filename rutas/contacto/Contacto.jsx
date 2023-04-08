import { Grid, Typography } from "@mui/material";
import { TextField, Button, FormControl, FormLabel, FormGroup } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import './Contacto.css'
const useContact = () => {
    const [alertContact, setAlertContact] = useState(false);
    const [alertContactSuccess, setAlertContactSuccess] = useState(false);
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

    const timeContactAlert = () => {
      setTimeout(()=>{
        setAlertContact(false)
      }, 2000)
    };
    const timeContactAlertSuccess = () => {
      setTimeout(()=>{
        setAlertContactSuccess(false)
      }, 4000)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nombre === "" ||
           correo === "" ||
           telefono === "" ||
           Solicitud === "" ||
           comentario === ""){
              setAlertContact(true)
              timeContactAlert()
           }else { 
            axios.post('http://localhost:3001/contacto/crear-solicitud',{
            nombre:nombre,
            correo:correo,
            telefono:telefono,
            solicitud: Solicitud,
            comentario: comentario
           }).then((resp)=>{
              setNombre("")
              setCorreo("")
              setTelefono("")
              setSolicitud("")
              setComentario("")
              setAlertContactSuccess(true)
              timeContactAlertSuccess()
           })
          }
        }
        return { alertContact,
                 setAlertContact,
                 alertContactSuccess,
                 setAlertContactSuccess,
                 nombre,
                 setNombre,
                 correo,
                 setCorreo,
                 telefono,
                 setTelefono,
                 Solicitud,
                 setSolicitud,
                 changeNombre,
                 changeCorreo,
                 changeTelefono,
                 changeSolicitud,
                 changeComentario,
                 timeContactAlert,
                 timeContactAlertSuccess,
                 handleSubmit
        }
}
const Contacto = ()=>{
  const { 
    alertContact,
    alertContactSuccess,
    changeNombre,
    changeCorreo,
    changeTelefono,
    changeSolicitud,
    changeComentario,
    timeContactAlert,
    timeContactAlertSuccess,
    handleSubmit
  } = useContact();
  
  timeContactAlert();
  timeContactAlertSuccess();

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