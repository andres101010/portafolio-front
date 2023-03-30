import { Button, Grid } from "@mui/material";


 const Logaut = ({setIsallowed}) => {
  const cerrarSesion = () => {
    setIsallowed(false)
  }
  return (
    <Grid container >
     <Grid item margin={"auto"} >
     <Button variant="outlined" color="error" size="large" onClick={()=>{cerrarSesion()}}>Cerrar sesion</Button>
     </Grid>
    </Grid>
  )
}
export default Logaut;