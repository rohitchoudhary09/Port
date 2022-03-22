import { Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './About.css';
import rohit from './abhinav.jpeg';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const hue_image = {
  position: 'relative',
  zIndex: 1,
  background: 'transparent',
  scale: [1, 1.2, 1.1],
  transition: {
  duration: .2
  },
}

const About = () => {
  AOS.init()
  return (
    <div data-aos="fade-up">
    <Container className='about' sx={{color: '#bcbcbc'}}>
      <div className='underline'>
        <h1 className='text'>ABOUT</h1>
      </div>
    </Container>
    <Toolbar>
      <Container className="aboutText" sx={{color: '#bcbcbc'}}>
        <Grid container rowSpacing={1} spacing={{ xs: 6, md: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div data-aos="zoom-in" whileHover={hue_image} style={{textAlign: 'center'}}>
              <img src={rohit} alt="myImage"className='myImage' />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
          <Container sx={{marginTop: '10%', paddingLeft: '30px'}}>
          <Typography variant="h2" component="div" gutterBottom sx={{"fontFamily":"'poppins', sans-serif", fontSize: '2.5rem'}}>
            Hey! I'm Rohit
          </Typography>
          <Typography variant="h4" component="div" gutterBottom sx={{"fontFamily":"'poppins', sans-serif", fontSize: '1.5rem'}}>
            Web Developer, Tech Enthusiast
          </Typography>
          <Typography variant="body1" component="div" gutterBottom sx={{"fontFamily":"'poppins', sans-serif", fontSize: '1.1rem'}}>
            A tech freak who loves to play with technologies, Learn new things and enjoy every moment of life. I'm a web developer, software developer aspirant and a student of Electronics & Communication Engineering.
          </Typography>
          {/* <Typography variant="body1" component="div" gutterBottom className="myAbout" sx={{"fontFamily":"'poppins', sans-serif", fontSize: '1.1rem'}}>
            Currently i'm in third year of my Bachelor's of Technology(B.Tech) from Abes Engineering College, Ghaziabad.
          </Typography> */}
         
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
    </div>
  )
}

export default About