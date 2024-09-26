import { makeStyles } from '@mui/styles';
import React from 'react'
import background from '../assets/Images/hero.png'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import { TiHeartOutline } from "react-icons/ti";
import Card from '../Components/Card';
import tokyo from '../assets/Images/tokyo.png'
import paris from '../assets/Images/paris.png'
import gucci from '../assets/Images/gucci.png'
import moonfall from '../assets/Images/moonfall.png'





const useStyles = makeStyles({

  header: {
    height: '400px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'flex-end',
  },
  text:{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '40px',


  },
  cards:{
    padding: '40px',


  },

  cads_container:{
    display:"flex",
    // flexWrap:'wrap',
    gap:'20px',
   
  },
 

 
})

const Favor = () => {

  const classes = useStyles();

 
  const movies = [
    { url: tokyo, title: 'Tokyo Train', date: '2022 | Action comedy' },
    { url: moonfall, title: 'Moonfall', date: '2022 | Sci-fi' },
    { url: paris, title: 'life in paris', date: '2023 | Documentary series' },
    { url: gucci, title: 'House of Gucci', date: '2021 | Drama' }
  ];

  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <div className={classes.text}>
          <Typography variant="h1" color="#fff">
            Insider
          </Typography>
          <Box display='flex'>
            <Typography variant="caption" color="#fff">
              2022 | Comedy horror | 1 Season
            </Typography>
          </Box>
          <Box display={'flex'} gap={'16px'}>
            <Button variant="text" sx={{
              padding: '17px 24px',
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#6200EE',
              borderRadius: '20px',
              fontSize: '14px',
            }}>
              Watch now
            </Button>
            <Button variant="text" sx={{
              padding: '17px 24px',
              textTransform: 'none',
              color: '#fff',
              background: `linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)`,
              borderRadius: '20px',
              fontSize: '16px',
            }}>
              <TiHeartOutline color='#6200ee' size={30} />
            </Button>
          </Box>
        </div>
      </div>
      <div className={classes.cards}>
        <Typography variant="h5" sx={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px'
        }}>
          Trending
        </Typography>
        <div className={classes.cads_container}>
          {movies.map((movie, index) => (
            <Card key={index} url={movie.url} title={movie.title} date={movie.date} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favor
