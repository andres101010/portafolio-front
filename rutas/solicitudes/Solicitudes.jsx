import { Button, Grid, Typography } from "@mui/material";
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

const useSolicitudes = () => {
  const [data, setData] = useState([]);
  const getData = async ()=>{
    const resp = await axios.get('http://localhost:3001/solicitudes')
    setData(resp.data)
};

useEffect(()=>{
   getData()
},[]);
return{
  data,

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
})=>{
 
  const {
    data,
  
  } = useSolicitudes();
    
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
             
      <TableContainer style={{ marginBottom:'5px'}}  >
      <Table sx={{ minWidth: 650, border: 2 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
          {data.map((row) => (
            <TableRow
              key={row.idsolicitudes}
              sx={{   border: 2  }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.solicitud}</TableCell>
              <TableCell align="right">{row.comentario}</TableCell>
              <TableCell align="right"><Button><DeleteIcon color="error" /></Button></TableCell>
              <TableCell align="right"><Button><EditIcon color="primary" /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
        
        </Grid>
      
    )
}

export default Solicitudes;