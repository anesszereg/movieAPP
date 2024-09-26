import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  main:{
    display: 'flex',
    overflow:'hidden' 

  }
})

function Home() {
  const classes = useStyles() 
  return (
    <div className={classes.main}>
        <Sidebar/>
        <div className={classes.container}>
          <Header/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Home