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
import andres from '/src/assets/img/andresFondo.png'
import mongo from '/src/assets/img/mongo.png'
import postgress from '/src/assets/img/postgress.png'
import sequelize from '/src/assets/img/sequelize.png'
import react from '/src/assets/img/react.png'
import typeScript from '/src/assets/img/typescript.png'
import jest from '/src/assets/img/jest.png'
import { Grid,  CardActionArea } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import next from '/src/assets/img/next3.png'

import './imagen.css'

const useImagen = () => {
  const [showImg, setShowImg] = useState(false)
  
  // const imagenes = [
  //   {id:1,img: html, name: 'Html'},
  //   {id:2,img: css, name: 'Css'},
  //   {id:3,img: js, name: 'JavaScript'},
  //   {id:4,img: bs, name: 'Bootstrap'},
  //   {id:5,img: mu, name: 'Material UI'},
  //   {id:6,img: node, name: 'Node.js'},
  //   {id:7,img: express, name: 'Express.js'},
  //   {id:8,img: mysql, name: 'MySql'},
  //   {id:9,img: git, name: 'GitHub'},
  //   {id:10,img: react, name: 'React.js'},
  //   {id:11,img: mongo, name: 'Mongo'},
  //   {id:12,img: sequelize, name: 'Sequelize'},
  //   {id:13,img: postgress, name: 'Postgress'},
  //   {id:14,img: typeScript, name: 'typeScript'},
  //   {id:15,img: jest, name: 'jest'},
  // ]

  const imagenes = [
    // Frontend
    { id: 1, img: html, name: 'Html' },
    { id: 2, img: css, name: 'Css' },
    { id: 3, img: js, name: 'JavaScript' },
    { id: 4, img: typeScript, name: 'TypeScript' },
    { id: 5, img: react, name: 'React.js' },
    { id: 6, img: next, name: 'Next.js' },
    { id: 7, img: bs, name: 'Bootstrap' },
    { id: 8, img: mu, name: 'Material UI' },
  
    // Backend
    { id: 9, img: node, name: 'Node.js' },
    { id: 10, img: express, name: 'Express.js' },
    { id: 11, img: mysql, name: 'MySQL' },
    { id: 12, img: postgress, name: 'PostgreSQL' },
    { id: 13, img: mongo, name: 'MongoDB' },
    { id: 14, img: sequelize, name: 'Sequelize' },
  
    // Herramientas
    { id: 15, img: git, name: 'GitHub' },
    { id: 16, img: jest, name: 'Jest' }
  ];
  
  const timeOut = () => setTimeout(()=>{
    setShowImg(true)
   }, 2000)
  useEffect(()=>{
     timeOut()
     clearTimeout(timeOut())
  },[]);

  return {
    showImg,
    setShowImg,
    imagenes,
    timeOut,
  }
};

const Imagen = () => {
  const { showImg,
          imagenes,
          timeOut } = useImagen();
          timeOut();
 
    return(
        <Grid container  mt={5} className='container-img'>
            <Grid item md={5} xs={12} >
         <Card sx={{maxWidth: 400, height:'200', margin:"auto"}}>
         <CardActionArea>
       <CardMedia
         sx={{ height: 280, margin:"auto", padding:"auto" }}
          image={andres}
          title="Andres"
       />
 
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" color={'green'}>
           Sobre mi!
         </Typography>
         <Typography variant="body1" color="text.secondary" style={{fontWeight:'bold'}}>
         Soy un Desarrollador Web Full Stack con varios años de experiencia en el desarrollo, mantenimiento y optimización de aplicaciones web. A lo largo de mi carrera, he trabajado en entornos dinámicos, enfrentando desafíos tanto en frontend como en backend, lo que me ha permitido desarrollar una visión integral del desarrollo de software.

Mi trayectoria incluye experiencia en empresas tecnológicas, proyectos colaborativos y aprendizaje autodidacta. He trabajado en sistemas complejos, como plataformas de apuestas deportivas, donde he mejorado funcionalidades existentes, optimizado procesos y desarrollado nuevas características para mejorar el rendimiento y la experiencia del usuario.
         </Typography>
       </CardContent>
       </CardActionArea>
     </Card>
         </Grid>
          <Grid item md={6} xs={12} mb={2} ml={5} mt={1}>
          <Typography variant='h4' color={"orange"}>Habilidades</Typography>

          {
            showImg &&
          //  imagenes.map((item,i)=>( 
          //   <div key={i} style={{display: "flex", alignItems: "center", gap: "10px"}}>
          //     <p>{item.name}</p>
          //     <img src={item.img} key={item.id} alt="imagen" style={{margin:'5px'}}/>
          //   </div>
          //  ))
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {imagenes.map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{color:'green'}}>{item.name}</p>
                <img className='image' src={item.img} alt="imagen" />
              </div>
            ))}
          </div>
          }
         {/* <ul style={{color:"green", fontSize:'20px'}}>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySql</li>
          <li>GitHub</li>
          <li>React</li>
          <li>Mongo</li>
          <li>Postgress</li>
          <li>Sequelize</li>
         </ul> */}
            </Grid> 
       
          </Grid>

        
    )
}

export default Imagen;