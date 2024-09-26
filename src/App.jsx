
import './App.css'
import { makeStyles } from '@mui/styles'
import background from './assets/Images/LoginBackground.png'
import { Box, Typography, Button } from '@mui/material'
import logo from './assets/Svgs/Logo.svg'
import { NavLink } from 'react-router-dom'



const useStyles = makeStyles({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background:`url(${background}), linear-gradient(90deg,
            rgba(97, 0, 194, 1) 0%,
            rgba(25, 24, 23, 1) 100%)`,
    color: 'white',
    backgroundSize: 'cover',
  }
})


function App() {

    const classes = useStyles()

  return (
    <div className={classes.container}>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'20px'}>
        <img src={logo} alt="" width={'130px'} />
        <Typography variant="body1" fontWeight={'100'} color="white">Enjoy the newest movies</Typography>

        <Button variant="text" sx={{
          backgroundColor:'rgb(97, 0, 194)',
          color:'white',
          borderRadius:'14px',
          padding:'10px 30px',
          width:'100%',
          marginTop:'10px',
          '&:hover':{
            backgroundColor:'rgb(97, 0, 194)',
            color:'white',
          }


        }}>
          Login
          
        </Button>


        {/*  sign up link */}

        <Typography variant="body2" fontWeight={'100'} color="white">No Account? <NavLink to="signUp" style={{color:'white' , fontWeight:"500"}}>Sign up</NavLink></Typography>
      </Box>


    </div>
  )
}

export default App
