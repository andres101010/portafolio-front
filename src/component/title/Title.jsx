import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import './Title.css';


const array = [
    {palabra:'Developer Front-End'},
 ];


const Title = () => {
    
    
    return(
        <Box className='title'>
          <Grid container >
             <Grid item md={6} ml={2} mt={5}>
                   <Typography className='animated-header2' variant='h2'>Hola, soy Andr&eacute;s Morales. </Typography>
                </Grid>
          </Grid>
            <Grid container>
                 {
                    array.map((element) =>(
                        <Grid item ml={2}  xs={12} md={12} key={element.palabra} >
                            <Typography className='animated-header' variant='h2' >{element.palabra}</Typography>
                        </Grid>
                    ))
                 }
            </Grid>
             
        </Box>
    )
}
export default Title;