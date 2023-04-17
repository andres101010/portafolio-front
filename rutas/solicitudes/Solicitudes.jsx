import { Button, Grid, Typography, FormControl, FormLabel,  TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { useState,useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';


const useSolicitudes = () => {
  const [data, setData] = useState([]);
  const [showTable, SetshowTable] = useState(true);
  const [showForm, Setshowform] = useState(false);
  const [showAlertSolicitud, SetshowAlertSolicitud] = useState(false);
  const [showAlertErrorSolicitud, SetshowAlertErrorSolicitud] = useState(false);
  const [showAlertEliminar, SetshowAlertEliminar] = useState(false);
  const [showAlertErrorEliminar, SetshowAlertErrorEliminar] = useState(false);
  const getData = async ()=>{
    const resp = await axios.get('http://localhost:3001/solicitudes')
    setData(resp.data)
};

const showModificacion = () => {
  Setshowform(true)
  SetshowTable(false)
};

const cancelar = () => {
  Setshowform(false)
  SetshowTable(true)
};

const timeAlertShowSolicitud = () => {
   setTimeout(()=>{
     SetshowAlertSolicitud(false)
     SetshowAlertEliminar(false)
   },3000)
}
const timeAlertShowSolicitudError = () => {
   setTimeout(()=>{
     SetshowAlertErrorSolicitud(false)
     SetshowAlertErrorEliminar(false)
   },3000)
}

useEffect(()=>{
   getData()
},[]);
return{
  data,
  showTable,
  SetshowTable,
  showForm,
  Setshowform,
  showModificacion,
  cancelar,
  showAlertSolicitud,
  SetshowAlertSolicitud,
  showAlertErrorSolicitud,
  SetshowAlertErrorSolicitud,
  timeAlertShowSolicitud,
  timeAlertShowSolicitudError,
  getData,
  showAlertEliminar,
  SetshowAlertEliminar,
  showAlertErrorEliminar,
  SetshowAlertErrorEliminar
}
};

const Solicitudes = ({
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
  setIdSolicitudes,
})=>{
 //************************************************************* */
  const {
    data,
    showForm,
    Setshowform,
    showTable,
    SetshowTable,
    showModificacion,
    cancelar,
    showAlertSolicitud,
    SetshowAlertSolicitud,
    showAlertErrorSolicitud,
    SetshowAlertErrorSolicitud,
    timeAlertShowSolicitud,
    timeAlertShowSolicitudError,
    getData,
    SetshowAlertErrorEliminar,
    showAlertErrorEliminar,
    SetshowAlertEliminar,
    showAlertEliminar,
    
  } = useSolicitudes();

  const edit = ((obj)=>{
    setIdSolicitudes(obj.idsolicitudes)
    setNombre(obj.nombre)
    setCorreo(obj.correo)
    setTelefono(obj.telefono)
    setSolicitud(obj.solicitud)
    setComentario(obj.comentario)
    console.log(obj)
 });
 const update = () => {
  axios.put(`http://localhost:3001/solicitudes/editar-solicitud/${idsolicitudes}`,{
    nombre:nombre,
    correo:correo,
    telefono:telefono,
    solicitud:Solicitud,
    comentario:comentario
  }).then(()=>{
    setIdSolicitudes("")
    setNombre("")
    setCorreo("")
    setTelefono("")
    setSolicitud("")
    setComentario("")
    getData()
    SetshowTable(true)
    Setshowform(false)
    SetshowAlertSolicitud(true)
    timeAlertShowSolicitud()
  }).catch((error)=>{
    SetshowAlertErrorSolicitud(true)
    timeAlertShowSolicitudError()
    console.log(error)
  })
};
const eliminar = ((idsolicitudes)=>{
  axios.delete(`http://localhost:3001/solicitudes/eliminar-solicitud/${idsolicitudes}`).then(()=>{
    setIdSolicitudes("")
    setNombre("")
    setCorreo("")
    setTelefono("")
    setSolicitud("")
    setComentario("")
    getData()
    SetshowAlertEliminar(true)
    timeAlertShowSolicitud()
  }).catch((err)=>{
    console.log(err)
    SetshowAlertErrorEliminar(true)
    timeAlertShowSolicitudError()
  })
 });

    return(
        <Grid container>
            <Grid item md={12} xs={12} mt={2} color={'green'} textAlign={'center'}>
              <Typography variant="h2">
                Solicitudes
              </Typography>
            </Grid>
            <Grid item md={12} xs={12} mt={2} color={'green'} textAlign={'center'}>
              <Typography variant="h5" mb={2}>
                Tabla de solicitudes de usuarios
              </Typography>
              {
                showAlertSolicitud &&
                <Alert severity="success">Edicion Exitosa!</Alert>
              }
              {
                showAlertErrorSolicitud &&
                <Alert severity="error">No se pudo editar!</Alert>
              }
              {
                showAlertEliminar &&
                <Alert severity="success">Se elimino registro con exito!!!!</Alert>
              }
              {
                showAlertErrorEliminar &&
                <Alert severity="error">No se pudo eliminar registro!!!!</Alert>
              }
     { showTable &&

      <TableContainer style={{ marginBottom:'5px'}}  >
      <Table sx={{ minWidth: 650, border: 2 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:'20px',color:'orange'}}>Id</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}}>Nombre</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Correo</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Telefono</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Solicitud</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Comentario</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Borrar</TableCell>
            <TableCell style={{fontSize:'20px',color:'orange'}} align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? <TableRow><TableCell colSpan={6}>No hay datos disponibles</TableCell></TableRow> : data.map((row) => (
            <TableRow
              key={row.idsolicitudes}
              sx={{   border: 2  }}
              
            >
                <TableCell component="th" scope="row" >
                {row.idsolicitudes}
                </TableCell>
              <TableCell component="th" scope="row" >
                {row.nombre}
              </TableCell>
              <TableCell align="right" >{row.correo}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.solicitud}</TableCell>
              <TableCell align="right">{row.comentario}</TableCell>
              <TableCell align="right"><Button><DeleteIcon color="error" onClick={()=>{eliminar(row.idsolicitudes)}} /></Button></TableCell>
              <TableCell align="right"><Button><EditIcon color="primary" onClick={()=>{edit(row),showModificacion()}}/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           }  
           {  showForm &&

             <form >
                    <FormControl>
                       <FormLabel style={{color:'white', fontSize:'20px'}}>Nombre</FormLabel>
                       <TextField id="outlined-basic" label="Nombre" value={nombre} variant="filled" size="normal" onChange={changeNombre}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Correo</FormLabel>
                       <TextField id="outlined-basic" label="Correo" value={correo} variant="filled" size="normal" onChange={changeCorreo} />
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Telefono</FormLabel>
                       <TextField id="outlined-basic" label="Telefono" value={telefono} variant="filled" size="normal"  onChange={changeTelefono}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Solicitud</FormLabel>
                       <TextField id="outlined-basic" label="Solicitud" value={Solicitud} variant="filled" size="normal"  onChange={changeSolicitud}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Comentario</FormLabel>
                       <Textarea id="outlined-basic" label="Ingresa tu Comentario" value={comentario}  variant="soft" style={{ width:300, height:90}}  onChange={changeComentario}/>
                       </FormControl><br />
                    <Grid item mt={2}>
                       <Button variant="outlined" color="success" onClick={()=>{update(idsolicitudes)}}>Guardar</Button>
                       <Button variant="outlined" color="error" onClick={()=>{cancelar()}}>Cancelar</Button>
                    </Grid>
                     
                 </form>
           }
            </Grid>
        
        </Grid>
      
    )
}

export default Solicitudes;