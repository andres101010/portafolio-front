import { Grid, Typography } from "@mui/material";

const Solicitudes = ({user})=>{
  
   console.log(user)
    
    return(
        <Grid container>
        <Typography variant="h1" color={'green'}>
            Solicitudes
        </Typography>
         <p>hola {user}</p>
        </Grid>
      
    )
}

export default Solicitudes;