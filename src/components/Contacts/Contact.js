import React from 'react'
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import database from './firebase';
import SendIcon from '@mui/icons-material/Send';
import { Button, Container, createTheme, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { motion } from 'framer-motion'
import openPeeps from './openPeeps.png'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
        main: grey[50],
    },
  },
});
  
function Contact() {
  const [name , setName] = useState();
  const [msg , setMsg] = useState();
      
  
  // Push Function
  const Push = () => {
    if(name!==""){
      database.ref("user").set({
        name : name,
        msg : msg,
      }).catch(alert);
      setName("");
      setMsg("");
    }
    else{
      setName("Error");
    }

  }
  
  return (
    <div>
      <Container className='work_head' style={{color: '#bcbcbc'}}>
        <div className='underline'>
            <h1 className='text'>CONTACT</h1>
        </div>
      </Container>
      <Container>
      <Grid container justifyContent="center">
        <Grid item >
          <motion.img
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}
            dragElastic={2}
            src={openPeeps} alt="me" style={{width: '30vw', height: 'auto'}}/>
        </Grid>
        <Grid item p={4} ml={1} sx={{width: '80%'}}>
          <ThemeProvider theme={theme}>
            <Grid item mb={4}>
                <TextField
                  required
                  fullWidth
                  type="Name"
                  id="demo-helper-text-aligned"
                  label="Name"
                  color="secondary"
                  size="small"
                  sx={{ input: { color: '#fff' } }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  focused
                  />
            </Grid>
            <Grid item mb={4}>
              <TextField
                required
                fullWidth
                type="Message"
                id="demo-helper-text-aligned"
                label="Message"
                color="secondary"
                size="small"
                sx={{ input: { color: '#fff' } }}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                focused
                />
            </Grid>
            <Grid item mb={4}>
              <Button variant="contained" endIcon={<SendIcon />} onClick={Push}>
                Send
              </Button>
            </Grid>
          </ThemeProvider>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}
  

export default Contact