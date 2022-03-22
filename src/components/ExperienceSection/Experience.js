import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import asiana from './asia.jpg'
import './Exp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  AOS.init()
  return (
    <div data-aos="fade-up">
      <Paper sx={{backgroundColor: '#bcbcbc'}}>
        <Container className='exp_head'>
          <div className='underline'>
            <h1 className='text'>EXPERIENCE</h1>
          </div>
        </Container>
        <Container>
          <Grid container justifyContent='center'>
            <Grid item mb={6}>
                <TaggedContentCard
                    href='https://asianatimes.com/'
                    thumbnail={asiana}
                    title='WordPress Developer (Intern)'
                    description="Oct 6, 2021"
                    tags={[
                        'SEO',
                        'SERPs',
                        'Content',
                    ]}
                />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

export default Experience