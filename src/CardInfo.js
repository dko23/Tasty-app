import React from 'react';
import { useParams } from 'react-router-dom';
import User from './Pages/User';


function CardInfo({ data }) {
  const { name } = useParams();

  const filteredData = data.filter(item => item.name === name);

  return (
    <div>
      <div className="card-container, receipe">
        {filteredData.map((item, index) => (
         <div className='container' key={index}>
         <div className='row'>
             <div class="col-md-6">
         
                 <div class="row">
                     <div class="col-sm-6"> <img src={item.image1} class="card-img-top" alt="..." /></div>
                     <div class="col-sm-6"> <img src={item.image2}class="card-img-top" alt="..." /></div>
                 </div>
             </div>
             <div class="col-md-6">
                 <div className='cake-details'>
                  <h2>{item.name}</h2>
                  <hr></hr>
                 <ul>
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
                 </div>
                 <hr></hr>
                   <User/>
             </div>
         
         </div>
         </div>
        ))}
      </div>
    
    </div>
  );
}

export default CardInfo;


