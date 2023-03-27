import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import './Title.css';


const array = [
    {palabra:'Developer'},
    {palabra:'Front-End'}
 ];


const Title = () => {
    
    
    return(
        <Box className='title'>
          <Grid container >
             <Grid item md={12}>
                   <Typography className='animated-header2' variant='h1'>Hola, soy Andr&eacute;s Morales. </Typography>
                </Grid>
          </Grid>
            <Grid container>
                 {
                    array.map((element) =>(
                        <Grid item xs={12} key={element.palabra}>
                            <Typography className='animated-header' variant='h2' >{element.palabra}</Typography>
                        </Grid>
                    ))
                 }
            </Grid>
             
        </Box>
    )
}
export default Title;