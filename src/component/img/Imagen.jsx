import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import img from '../../assets/img/andres.jpg'
import './Imagen.css'
const Imagen = () => {
  const [showImg, setShowImg] = useState(false)
  const timeOut = () => setTimeout(()=>{
    setShowImg(true)
   }, 2000)
  useEffect(()=>{
     timeOut()
     clearTimeout(timeOut())
  },[]);
    return(
        <Grid className='container-img'>
          <Grid item mt={5} mr={2} >
          { showImg &&
            <img src={img} alt="Andres" />
          }
          </Grid>
          </Grid>

        
    )
}

export default Imagen;