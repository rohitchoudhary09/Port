import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import './Appbar.css';
import { motion } from 'framer-motion'


export default function ButtonAppBar() {
  return (
    <AppBar position={'static'} elevation={0} color={'transparent'}>
      <Toolbar>
        <Container sx={{display: 'flex', justifyContent: 'right' }}>
        <Typography p={4} className="menu">
          <motion.div whileHover={{scale: 1.2}}>Home</motion.div>
        </Typography>
        <Typography p={4} className="menu">
        <motion.div whileHover={{scale: 1.2}}>Works</motion.div>
        </Typography>
        <Typography p={4} className="menu">
        <motion.div whileHover={{scale: 1.2}}>About</motion.div>
        </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}