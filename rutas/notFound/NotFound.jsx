import { Grid, Typography } from '@mui/material';
import React from 'react'
import notFound from '/src/assets/img/404.png'
 const NotFound = () => {
  return (
    <Grid container>
      <Grid item md={12} mt={1}  textAlign={'center'}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h2'>Page not found</Typography>
      </Grid>
      <Grid item md={12} xs={12} mt={3}  textAlign={'center'}>
          <img src={notFound} alt="NotFound" style={{width:'300px', borderRadius:'50%'}} />
      </Grid>
    </Grid>
  )
}
export default NotFound;