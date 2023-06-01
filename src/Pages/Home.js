import React from 'react'
import {useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

  return (
      <>
          <div>Home</div>
          <div>
          <button onClick={()=>{navigate('order')}}>Order Box</button>
          </div>
      
      </>
  )
}

export default Home