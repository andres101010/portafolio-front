import { Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return(
        <Grid container>
            <Grid item>
                <NavLink style={{color:'gray'}} to={'https://www.facebook.com/andres.morales.144181/'} target='_blank'><FacebookIcon fontSize="large" rel="noopener noreferrer" /></NavLink>
            </Grid>
             <Grid item>
               <NavLink style={{color:'gray'}} to={'https://www.linkedin.com/in/andres-ricardo-morales-b56830234/'} target='_blank' rel="noopener noreferrer"><LinkedInIcon fontSize="large" /></NavLink> 
             </Grid>
             <Grid item>
                <NavLink style={{color:'gray'}} to={'https://github.com/andres101010'} target='_blank' rel="noopener noreferrer"><GitHubIcon fontSize="large" /></NavLink>
             </Grid>
        </Grid>
        
      
    )
}

export default Footer;