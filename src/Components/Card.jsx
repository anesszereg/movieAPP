import { Box } from '@mui/material'
import {  makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import tokyo from '../assets/Images/tokyo.png'
import { FaHeart } from 'react-icons/fa6'
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
const useStyles = makeStyles({


    container:{

        height:'300px',
        width:'255px',
        border:'1px solid #cccccc',
        borderRadius:'20px',
    
        overflow:'hidden',
        display:'flex',
        alignItems:"flex-end",
        position:'relative',

    },
    text_container:{
        background:' linear-gradient(100deg, #FFF 12.94%, rgba(255, 255, 255, 0.00) 159.1%)',
        height:"50px",
        padding:'10px',
        width:'100%',
    

    },
    icon:{
        height: '42px',
        width:'42px',
        background:'linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)',
        backdropFilter:'blur(20px)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'5px',
        border: ' 1px solid #FFF',
        position:'absolute',
        top:'10px',
        right:'10px',
        cursor:'pointer',
        '&:hover':{
          border: ' 1px solid hsla(270, 100%, 38%, 1) ',
            
        }
    },

})



const Card = ({url , title , date}) => {

    const classes = useStyles()


    const [isLiked, setIsLiked] = useState(false)

  return (
  <div className={classes.container}
    style={{
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className={classes.icon}
    onClick={()=> setIsLiked(!isLiked)}
    >
      {
        isLiked ? <GoHeartFill size={25} color='hsla(270, 100%, 38%, 1)' /> : <FiHeart size={25} color='hsla(270, 100%, 38%, 1)' />
      }

    </div>

    <div className={classes.text_container}>

    <b>{title}</b>
    <p>{date}</p>
    </div>

  </div>
  )
}

export default Card
