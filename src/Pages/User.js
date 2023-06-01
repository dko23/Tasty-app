import React from 'react'
import { useNavigate } from 'react-router-dom';



function User() {

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
  return (
      <>
          <div>
               <div>
               <button type="button" class="btn btn-success" onClick={handleBack}>Go Back</button> 
              </div> 
        </div>
      </>
  )
}

export default User