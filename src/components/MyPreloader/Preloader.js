import React from 'react';
import UseAnimations from 'react-useanimations';
import Loading2 from 'react-useanimations/lib/loading2'
import './loader.css'

const Preloader = () => {
  return (
    <div className='pre'>
        <UseAnimations animation={Loading2} size={140} fillColor={'white'} sx={{cursor: 'pointer'}}/>
    </div>
  )
}

export default Preloader