import { AppBar, Box, Button, Typography,Toolbar,React } from "@mui/material"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp</Typography>
          
          <Button color="inherit"><Link to ='/Add' style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
            

          <Button color="success"><Link to ='/' style={{color:'white',textDecoration:'none'}} >View</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>


  )
}


export default Navbar
