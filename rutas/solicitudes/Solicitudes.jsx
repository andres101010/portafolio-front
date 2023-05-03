import { Button, Grid, Typography, FormControl, FormLabel,  TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import { useSolicitudes } from "../../src/component/hook/useSolicitudes";
import { useGlobalState } from "../../src/component/hook/UseglobalState";
import { sendUpdate } from "../../src/component/services/ContactServices";
import { sendDelete } from "../../src/component/services/ContactServices";
const Solicitudes = ({})=>{
 //************************************************************* */
  
 const {
  nombre,
  setNombre,
  correo,
  setCorreo,
  telefono,
  setTelefono,
  solicitud,
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
 } = useGlobalState();

  const {
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
    SetshowAlertErrorEliminar,
    showAlertErrorEliminar,
    SetshowAlertEliminar,
    showAlertEliminar,
    setSerch,
    result,
    cargarSolicitudes
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
 const update = async () => {
  try {
    const contact = {nombre,correo,telefono,solicitud,comentario}
    const result = await sendUpdate(contact, idsolicitudes)
    console.log(result)
    cargarSolicitudes()
    SetshowTable(true)
    Setshowform(false)
    SetshowAlertSolicitud(true)
    timeAlertShowSolicitud()
  } catch (error) {
    SetshowAlertErrorSolicitud(true)
    timeAlertShowSolicitudError()
    console.log(error)
    new Error('No se pudo editar.. :(')
  }
};

  const eliminar = async (idsolicitudes) => {
    try {
      const contact = {nombre,correo,telefono,solicitud,comentario}
      const resp = await sendDelete(contact, idsolicitudes)
      console.log(resp)
      cargarSolicitudes()
      SetshowAlertEliminar(true)
      timeAlertShowSolicitud()
    } catch (error) {
      console.log(err)
      SetshowAlertErrorEliminar(true)
      timeAlertShowSolicitudError()
    }
  };

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
      <TextField type="input" id="outlined-basic" label="Busca tu Nombre" onChange={(e)=>{setSerch(e.target.value)}} style={{margin:'10px', float:'right'}} />
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
          {result.length === 0 ? <TableRow><TableCell colSpan={6}>No hay datos disponibles</TableCell></TableRow> : result.map((row) => (
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
                       <TextField id="outlined-basic" label="Solicitud" value={solicitud} variant="filled" size="normal"  onChange={changeSolicitud}/>
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