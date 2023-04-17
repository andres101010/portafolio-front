import { Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import crudReact from '/src/assets/img/crud-react.png'
import ecommer1 from '/src/assets/img/ecommer1.png'
import loginImg from '/src/assets/img/login.png'
import pPt from '/src/assets/img/piedra-papel-tijeras.png'
import tenis from '/src/assets/img/tenis.png'
import consultora from '/src/assets/img/consultora.png'

import { NavLink } from "react-router-dom";
const Proyecto = ()=>{
    return(
        <Grid container m={"auto"}>
            <Grid item md={12} xs={12} color={'green'} textAlign={'center'} mb={'10px'}>
            <Typography variant="h2">Proyectos</Typography>
            </Grid>

    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345  }}>
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
         Link del codigo en GitHub:            
        <NavLink to={'https://github.com/andres101010/crud-react-front'} target="_blank" style={{textDecoration:'none', marginLeft:"55px"}} >Crud React</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345 }}>
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
      Link del codigo en GitHub:            
        <NavLink to={'https://github.com/andres101010/marketplace-front'} target="_blank" style={{textDecoration:'none',marginLeft:"65px"}} > Ecommer</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345 }}>
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
      Link del codigo en GitHub:
      <NavLink to={'https://github.com/andres101010/challenge7'} target="_blank" style={{textDecoration:'none', marginLeft:"95px"}} >Login</NavLink>
      </CardActions>
    </Card>
     </Grid>
    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345 }}>
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
    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345 }}>
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
    <Grid item md={4} m={'auto'} mb={'5px'}>
     <Card sx={{ maxWidth: 345 }}>
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
      Link de la pagina:
      <NavLink to={'https://andres101010.github.io/consultora/'} target="_blank" style={{textDecoration:'none', marginLeft:"120px"}}>Consultora</NavLink>
      </CardActions>
    </Card>
     </Grid>

    </Grid>
    )
}

export default Proyecto;