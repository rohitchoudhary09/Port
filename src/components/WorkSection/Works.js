import { Container, Grid } from '@mui/material';
import React from 'react';
import './Work.css';
import img1 from '../WorkSection/ub.jpg';
import img2 from '../WorkSection/pics/2.png';
import img3 from '../WorkSection/pics/3.png';
import img4 from '../WorkSection/pics/1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TaggedContentCard } from 'react-ui-cards';

const Works = () => {
  AOS.init()
  return (
    <div data-aos="fade-up">
      <Container className='work_head' sx={{color: '#bcbcbc'}}>
        <div className='underline'>
          <h1 className='text'>WORKS</h1>
        </div>
      </Container>
      <Container>
        <Grid container rowSpacing={6} columnSpacing={8} justifyContent="center">
          <Grid item>
            <TaggedContentCard
                href='https://github.com/Rohitchaudhary13/Uber-Eats'
                thumbnail={img1}
                title='Uber Eats App Clone'
                tags={[
                    'React Native',
                    'Google Api',
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='https://fitnesstepz.com/'
                target="_blank"
                thumbnail={img2}
                title='Fitnesstepz'
                tags={[
                    'Html/Css',
                    'Js',
                    'WordPress',
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='rohitchaudhary13.github.io/findyourboat/'
                thumbnail={img3}
                title='Find Your Boat'
                tags={[
                    'Html/Css/Js',
                    'Bootstrap',
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='https://rohitchoudhary13.vercel.app/'
                thumbnail={img4}
                title='Portfolio'
                tags={[
                    'NextJs',
                    'Material UI',
                ]}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Works