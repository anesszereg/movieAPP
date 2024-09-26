import { makeStyles } from '@mui/styles'
import React from 'react'
import { MdHeight } from 'react-icons/md'
import Typography from '@mui/material/Typography'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Box } from '@mui/material';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '70px',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    marginBottom:'-100px',
    zIndex: '100',

  

  },
  right: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    color: '#fff',
    height: '100%', 
  },
  left:{
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    color: '#fff',
    height: '100%',
  }
})


const Header = () => {

  const classes = useStyles()

    
  return (
    <div className={classes.container}>

      <Box className={classes.right}>
        <Typography variant="body1" color="#fff">Movies</Typography>
        <Typography variant="body1" color="#fff">Series</Typography>
        <Typography variant="body1" color="#fff">Documentaries</Typography>
      </Box>

      <Box className={classes.left}>
      <IoSearchSharp color='#fff' />
      <IoMdNotificationsOutline />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

      </Box>

      
    </div>
  )
}

export default Header

