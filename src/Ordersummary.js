import React from 'react'
import {useNavigate } from 'react-router-dom';

function Ordersummary() {

  const navigate = useNavigate();
  return (
    <>
       <div>
        <h3>Order confirmed</h3>
        <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
    </>
  )
}

export default Ordersummary