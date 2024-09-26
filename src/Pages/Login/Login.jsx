
import { makeStyles } from '@mui/styles'
import './Login.css'
import { Box, Button, Checkbox, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import logo from '../../assets/Svgs/Logo.svg'
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from 'react-icons/si';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({

  card: {
    width: '30%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '20px',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
    padding: ' 40px',
    gap: '25px',
    backdropFilter: 'blur(100px)',
    border: '1px solid #f5f5f5',
  }




})

function Login() {

  const classes = useStyles()


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='Login_background'>


      <Box className={classes.card}>

        <img src={logo} alt="" />


        <Box display={'flex'} alignItems={'center'} gap={'20px'} width={'100%'}>

          <Button sx={{
            backgroundColor: '#ffffff',
            color: 'black',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            textTransform: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
          }}>

            <FcGoogle size={20} />
            Login with Google



          </Button>
          <Button sx={{
            backgroundColor: '#ffffff',
            color: 'black',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            textTransform: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
          }}>

            <SiGithub size={20} />
            Login with Github



          </Button>
        </Box>

        <div className='form'>
          {/* <TextField
            label="userName"
            id="outlined-start-adornment"
            fullWidth
            sx={{
              // change the color of the border on focus

              '& label.Mui-focused': {
                color: 'rgb(97, 0, 194)',
                borderColor: 'rgb(97, 0, 194)',

              },

            }}
          /> */}
          <TextField
            label="Email"
            id="outlined-start-adornment"
            fullWidth
            sx={{
              border: 'white',
              // change the color of the border on focus

              '& .Mui-focused': {
                color: 'rgb(97, 0, 194)',
                borderColor: 'white',

              },
            }}

          />

          <FormControl FullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(97, 0, 194)', // Change border color on focus
                },
              }}
            />
          </FormControl>

        </div>

        <Box display={'flex'} flexDirection={'column'} gap={'20px'} width={'100%'}>

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>

            <Box display={'flex'} gap={'7px'} alignItems={'center'}>


              <Checkbox {...label} defaultChecked />
              <Typography variant="caption" color="#757575">I accept the terms & Condition </Typography>
            </Box>

            <Button sx={{
              backgroundColor: '#6200EE',
              color: 'white',
              width: '30%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              textTransform: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
            }}>
              LogIn

            </Button>
          </Box>

          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            gap={'10px'}

          >

            <Typography variant="caption" color="#757575">
              Don't have an account?
            </Typography>
            {/* underline text */}
            <Typography variant="caption" textTransform={'underline'} color="#6200EE">
              <Link to='/signUp' style={{
                color: '#6200EE',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Sign Up
              </Link>
            </Typography>


          </Box>

        </Box>





      </Box>


    </div>
  )
}

export default Login