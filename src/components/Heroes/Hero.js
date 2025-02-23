import { Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react';
import {motion} from 'framer-motion'
import './Hero.scss'
import UseAnimations from 'react-useanimations';
import scrollDown from 'react-useanimations/lib/scrollDown'
import github from 'react-useanimations/lib/github'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'

const Hero = () => {

  const buttonVariants = {
    hover: {
      scale: 1.1,
      x: [10, 0],
      y: [-20, 0, 20],
      textShadow: "0px 0px 10px rgb(188, 188, 188)",
      transition: {
        duration: 0.8,
        yoyo: Infinity,
      }
    }
  }

  return (
    <motion.div animate={{scale: [1, 1.1]}} transition={{type: 'spring' , duration: 2}}>
        <Container sx={{marginTop: '14rem', color: '#bcbcbc'}}>
            <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}
            dragElastic={2}
            className='hello'>
                <motion.h1
                variants={buttonVariants}
                animate="hover"
                className="rohit"
                style={{marginBottom: '7rem'}}
                >ROHIT CHAUDHARY</motion.h1>
            </motion.div>
                  <img src="https://ik.imagekit.io/foogrshml/Untitled.png?updatedAt=1740272179182" alt="image" />
            <Toolbar>
              <Grid container justifyContent="center">
                <Typography p={4}>
                  <a href='https://github.com/Rohitchaudhary13'><UseAnimations  animation={github} size={40} strokeColor="#fff"/></a>
                </Typography>
                <Typography p={4}>
                  <a href='https://www.instagram.com/_rohit.chaudhary__/?hl=en'><UseAnimations animation={instagram} size={40} strokeColor="#fff"/></a>
                </Typography>
                <Typography p={4}>
                  <a href='https://www.linkedin.com/in/rohit-choudhary-0b42641aa/?originalSubdomain=in'><UseAnimations animation={linkedin} size={40} strokeColor="#fff"/></a>
                </Typography>
              </Grid>
            </Toolbar>
            <Grid container justifyContent="center">
              <Typography p={2}>
                <motion.div whileHover={{scale: 1.2}}><UseAnimations animation={scrollDown} size={40} strokeColor="#fff"/></motion.div>
              </Typography>
            </Grid>
      </Container>
    </motion.div>
  )
}

export default Hero
