import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import html from '/src/assets/img/html.png'
import css from '/src/assets/img/css3.png'
import js from '/src/assets/img/javaScript.png'
import bs from '/src/assets/img/bootstrap1.png'
import mu from '/src/assets/img/materialui.png'
import node from '/src/assets/img/node.png'
import express from '/src/assets/img/express.png'
import mysql from '/src/assets/img/mysql.jpg'
import git from '/src/assets/img/GitHub.png'
import andres from '/src/assets/img/andres3.jpg'
import './Imagen.css'
import { Grid,  CardActionArea } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const Imagen = () => {
  const [showImg, setShowImg] = useState(false)
  
  const imagenes = [
    {id:1,img: html},
    {id:2,img: css},
    {id:3,img: js},
    {id:4,img: bs},
    {id:5,img: mu},
    {id:6,img: node},
    {id:7,img: express},
    {id:8,img: mysql},
    {id:9,img: git},
    
  ]

  const timeOut = () => setTimeout(()=>{
    setShowImg(true)
   }, 2000)
  useEffect(()=>{
     timeOut()
     clearTimeout(timeOut())
  },[]);
    return(
        <Grid container mt={5} className='container-img'>
            <Grid item md={12} xs={12} ml={2} >
         
         <Card sx={{maxWidth: 500, height:'500', margin:"auto", marginBottom:2}}>
         <CardActionArea>
       <CardMedia
         sx={{ height: 400, margin:"auto", padding:"auto" }}
          image={andres}
          title="Andres"
       />
 
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" color={'green'}>
           Sobre mi!
         </Typography>
         <Typography variant="body1" color="text.secondary">
         Soy un desarrollador web front-end con experiencia en HTML, CSS, JavaScript y React. Me apasiona crear sitios web eficaces y atractivos que mejoren la experiencia del usuario.
         </Typography>
       </CardContent>
       </CardActionArea>
     </Card>
         </Grid>
          <Grid item xs={12} mb={2}>
          <Typography variant='h4' color={"white"}>Habilidades</Typography>
            </Grid> 
          {
            showImg &&
            
           imagenes.map((item)=>( 
           
            <Grid item margin={'auto'}  key={item.id}>
             
              <img src={item.img} alt="imagen"/>
              </Grid>
         
           ))

          }
          <Grid item md={12}>
             
          </Grid>
          </Grid>

        
    )
}

export default Imagen;