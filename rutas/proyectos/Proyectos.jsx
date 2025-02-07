import './Proyectos.css'
import { Grid, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import crudReact from '/src/assets/img/crud-react.png'
import ecommer1 from '/src/assets/img/ecommer1.png'
import loginImg from '/src/assets/img/login.png'
import pPt from '/src/assets/img/piedra-papel-tijeras.png'
import tenis from '/src/assets/img/tenis.png'
import consultora from '/src/assets/img/consultora.png'
// import mercado1 from '/src/assets/img/mercados1.jpg'
// import mercado2 from '/src/assets/img/mercados2.jpg'

import { NavLink } from "react-router-dom";
const Proyecto = ()=>{

  const images = [
    { src: '/src/assets/img/mercados1.jpg', title: 'Mercado 1' },
    { src: '/src/assets/img/mercados2.jpg', title: 'Mercado 2' },
    { src: '/src/assets/img/mercados3.jpg', title: 'Mercado 3' },
    { src: '/src/assets/img/mercados4.jpg', title: 'Mercado 4' },
    { src: '/src/assets/img/mercados5.jpg', title: 'Mercado 5' },
    { src: '/src/assets/img/mercados6.jpg', title: 'Mercado 6' },
    { src: '/src/assets/img/mercados7.jpg', title: 'Mercado 7' }
  ];
  const images2 = [
    { src: '/src/assets/img/location1.png', title: 'location 1' },
    { src: '/src/assets/img/location2.png', title: 'location 2' },
    { src: '/src/assets/img/location3.png', title: 'location 3' },
    
  ];
    return(
        <Grid container m={"auto"} >
            <Grid item md={12} xs={12} color={'green'} textAlign={'center'} mb={'10px'}>
            <Typography variant="h2">Proyectos Iniciales</Typography>
            </Grid>

    <Grid item md={4} m={'auto'} mb={'5px'} className="itemProyect">
     <Card sx={{ width: 345  }} className="itemProyect">
        <CardMedia
        sx={{ height: 200, width:"auto" }}
        image={crudReact}
        title="Crud"
        
      />
       <CardContent style={{backgroundColor:'black', color:'white'}}>
        <Typography gutterBottom variant="h5" component="div">
          Crud hecho con React.js
        </Typography>
        <Typography variant="body2" color="white">
          Tecnologias usadas: React.js, BootsTrap y por el backend
          Node.js, Express.js, MySql Workbench. 
        </Typography>
       </CardContent >
      <CardActions style={{backgroundColor:'black', color:'white'}}>
         Link:            
        <NavLink to={'https://github.com/andres101010/crud-react-front'} target="_blank" style={{textDecoration:'none', marginLeft:"55px"}} >Crud React</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}  className="itemProyect">
     <Card sx={{ width: 345 }}  className="itemProyect">
        <CardMedia
        sx={{ height: 195 }}
        image={ecommer1}
        title="Ecommer"
      />
       <CardContent style={{backgroundColor:'black',color:'white', paddingBottom:'1px'}} >
        <Typography gutterBottom variant="h5" component="div">
          Ecommer
        </Typography>
        <Typography variant="body2" color="white">
          Tecnologias usadas: React.js , Protecte Router, Material UI y por el backend
          Node.js, Express.js, MySql Workbench. 
        </Typography>
       </CardContent >
      <CardActions style={{backgroundColor:'black', color:'white'}}>
      Link:            
        <NavLink to={'https://github.com/andres101010/marketplace-front'} target="_blank" style={{textDecoration:'none',marginLeft:"65px"}} > Ecommer</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}  className="itemProyect">
     <Card sx={{ width: 345 }}  className="itemProyect">
        <CardMedia
        sx={{ height: 200 }}
        image={loginImg}
        title="Login"
      />
       <CardContent style={{backgroundColor:'black', color:'white', paddingBottom:'1px'}}>
        <Typography gutterBottom variant="h5" component="div">
          Login
        </Typography>
        <Typography variant="body2" color="white">
           Tecnologias usadas: React.js, Protected Router, BoostsTrap y por el backend
           Node.js, Exprees.js, MySql Workbench 
        </Typography>
       </CardContent>
      <CardActions style={{backgroundColor:'black', color:'white'}}>
      Link:
      <NavLink to={'https://github.com/andres101010/challenge7'} target="_blank" style={{textDecoration:'none', marginLeft:"95px"}} >Login</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}  className="itemProyect">
     <Card sx={{ width: 345 }}  className="itemProyect">
        <CardMedia
        sx={{ height: 200 }}
        image={pPt}
        title="piedra-papel-tijeras"
      />
       <CardContent style={{backgroundColor:'black',color:'white', paddingBottom:'1px'}}>
        <Typography gutterBottom variant="h5" component="div">
           Piedra, Papel, Tijeras
        </Typography>
        <Typography variant="body2" color="white">
          Juego clasico hecho con: React.js, logica JavaScript, Css
        </Typography>
       </CardContent>
      <CardActions style={{backgroundColor:'black', color:'white'}}>
      Link del codigo en GitHub:
      <NavLink to={'https://github.com/andres101010/piedra-papel-tijeras'} target="_blank" style={{textDecoration:'none'}} >Piedra,Papel,Tijeras</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}  className="itemProyect">
     <Card sx={{ width: 345 }} className="itemProyect">
        <CardMedia
        sx={{ height: 200 }}
        image={tenis}
        title="Club de tenis"
      />
       <CardContent style={{backgroundColor:'black', color:'white', paddingBottom:'20px'}}>
        <Typography gutterBottom variant="h5" component="div">
          Club de tenis
        </Typography>
        <Typography variant="body2" color="white">
           Pagina estatica hecha con: Html, CSS y backend Node.js, Expreess.js 
           MySql.
        </Typography>
       </CardContent>
      <CardActions style={{backgroundColor:'black', color:'white'}}>
      Link del codigo en GitHub:
      <NavLink to={'https://github.com/andres101010/club-tenis'} target="_blank" style={{textDecoration:'none',marginLeft:"40px"}} >Club de Tenis</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'} className="itemProyect">
     <Card sx={{ width: 345 }}  className="itemProyect">
        <CardMedia
        sx={{ height: 200 }}
        image={consultora}
        title="consultora"
      />
       <CardContent style={{backgroundColor:'black', color:'white', padding:'18px'}}>
        <Typography gutterBottom variant="h5" component="div">
          Consultora
        </Typography>
        <Typography variant="body2" color="white">
           Pagina estatica hecha con: React.js, React Router Dom y BootsTrap
        </Typography>
       </CardContent>
      <CardActions style={{backgroundColor:'black', color:'white'}}>
      Link :
      <NavLink to={'https://andres101010.github.io/consultora/'} target="_blank" style={{textDecoration:'none', marginLeft:"120px"}}>Consultora</NavLink>
      </CardActions>
    </Card>
     </Grid>

     {/* PROYECTOS AVANZADOS */}

     <Grid item md={12} xs={12} color={'green'} textAlign={'center'} mb={'10px'}>
            <Typography variant="h2">Proyectos Avanzados</Typography>
     </Grid>

     {/* carrusel */}

     <Grid item md={7} m={'auto'} mb={'5px'} className="itemProyect">
      <Card sx={{ width: 800 }} className="itemProyect">

        {/* 🖼 Carousel con imágenes */}
        <Carousel>
          {images.map((img, index) => (
            <CardMedia
              key={index}
              sx={{ height: 390, width: 'auto' }}
              image={img.src}
              title={img.title}
            />
          ))}
        </Carousel>

        {/* 📌 Contenido de la Card */}
        <CardContent style={{ backgroundColor: 'black', color: 'white' }}>
          <Typography gutterBottom variant="h5" component="div">
            Sistema Para El Control De Pago De Alquiler Para Mercados
          </Typography>
          <Typography variant="body2" color="white">
          He desarrollado una plataforma integral para la gestión eficiente de mercados y arrendatarios. Con este sistema, los administradores pueden optimizar el cobro de rentas y mejorar el control financiero de los puestos de mercado.
          🔹 Funcionalidades principales:
          ✅ Inicio de sesión y gestión de usuarios 👥
          ✅ Registro y administración de mercados y arrendatarios 📋
          ✅ Pagos digitales de los puestos asignados 💳
          ✅ Generación de actas de entrega 📄
          ✅ Historial de pagos y observaciones 🔍
          ✅ Gráficos de estadísticas para análisis financiero 📊
          💡 Tecnología utilizada:
          Desarrollado con Node.js, Express, React.js y MongoDB, garantizando un sistema escalable, rápido y seguro.
          
          </Typography>
          <Typography variant="body2" color="white">Credenciales:</Typography>
          <Typography variant="body2" color="white">admin@gmail.com</Typography>
          <Typography variant="body2" color="white">1234</Typography>
        </CardContent>

        {/* 🔗 Enlace */}
        <CardActions style={{ backgroundColor: 'black', color: 'white' }}>
          Link:
          <NavLink 
            to="https://mercados-front.vercel.app/" 
            target="_blank" 
            style={{ textDecoration: 'none', marginLeft: "55px", color: 'blue' }}>
            https://mercados-front.vercel.app/
          </NavLink>
        </CardActions>

      </Card>
    </Grid>

    <Grid item md={7} m={'auto'} mb={'5px'} mt={5} className="itemProyect">
      <Card sx={{ width: 800 }} className="itemProyect">

        {/* 🖼 Carousel con imágenes */}
        <Carousel>
          {images2.map((img, index) => (
            <CardMedia
              key={index}
              sx={{ height: 390, width: 'auto' }}
              image={img.src}
              title={img.title}
            />
          ))}
        </Carousel>

        {/* 📌 Contenido de la Card */}
        <CardContent style={{ backgroundColor: 'black', color: 'white' }}>
          <Typography gutterBottom variant="h5" component="div">
          🌍 Proyecto de Localización y Moneda
          </Typography>
          <Typography variant="body2" color="white">
            🚀 Tecnologías Utilizadas
            Backend: Node.js + Express
            Frontend: React.js
            Cliente HTTP: Axios
            APIs Consumidas:
            vatcomply.com → Para obtener información de monedas.
            ipinfo.io / restcountries.com → Para geolocalización y datos del país.
                      
          </Typography>
          <Typography variant="body2" color="white"> 
            🎯 Objetivo del Proyecto
          El proyecto permite obtener automáticamente la moneda local del usuario con base en su dirección IP. Se utiliza una combinación de APIs para determinar el país y luego consultar la moneda correspondiente.
          </Typography>
          <Typography variant="body2" color="white">
          🔧 Funcionamiento
            Obtener la dirección IP del usuario.
            Se obtiene la IP desde el backend usando req.ip o una API externa.
            Consultar la API de geolocalización.
            Se usa una API similar para obtener el país del usuario.
            Determinar la moneda del país.
            Se consulta restcountries.com para obtener el código y símbolo de la moneda.
            Mostrar la moneda en la interfaz de usuario.
            El frontend en React muestra la información en tiempo real. Al igual que guarda el registro de las monedas buscadas en una base de datos MySql
          </Typography>
          
        </CardContent>

        {/* 🔗 Enlace */}
        <CardActions style={{ backgroundColor: 'black', color: 'white' }}>
          Link:
          <NavLink 
            to="https://lnkd.in/eFmQeSW6" 
            target="_blank" 
            style={{ textDecoration: 'none', marginLeft: "55px", color: 'blue' }}>
            https://lnkd.in/eFmQeSW6
          </NavLink>
        </CardActions>

      </Card>
    </Grid>

    </Grid>
    )
}

export default Proyecto;