import { Container, Grid, Toolbar } from '@mui/material'
import React from 'react'
import './Achieve.css'
import one from './intro_to_cyber.png'
import two from './google_Analytics.png';
import three from './gswoc.png';
import four from './harvardX.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'


const myStyle={
  backgroundImage: `url(${one})`,
  height:'10rem',
  width: '18rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '60px',
};
const myStyle2={
  backgroundImage: `url(${two})`,
  height:'10rem',
  width: '18rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '60px'
};
const myStyle3={
  backgroundImage: `url(${three})`,
  height:'10rem',
  width: '18rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '60px'
};
const myStyle4={
  backgroundImage: `url(${four})`,
  height:'10rem',
  width: '18rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '60px'
};

const Achievements = () => {

  AOS.init()
  return (
    <div data-aos="fade-up">
    <Container className='achieve_head' sx={{color: '#bcbcbc'}}>
      <div className='underline'>
        <h1 className='text'>ACHIEVEMENTS</h1>
      </div>
    </Container>
    <Toolbar>
      <Grid container justifyContent="center">
        <Grid item p={2} >
          <motion.div style={myStyle} whileHover={{scale: 1.1}}>
          </motion.div>
        </Grid>
        <Grid item p={2}>
        <motion.div style={myStyle2} whileHover={{scale: 1.1}}>
          </motion.div>
        </Grid>
        <Grid item p={2}>
        <motion.div style={myStyle3} whileHover={{scale: 1.1}}>
          </motion.div>
        </Grid>
        <Grid item p={2}>
        <motion.div style={myStyle4} whileHover={{scale: 1.1}}>
          </motion.div>
        </Grid>
      </Grid>
      </Toolbar>
    </div>
  )
}

export default Achievements