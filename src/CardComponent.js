import React from 'react';
import { Link } from 'react-router-dom';

function CardComponent({ data }) {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={item.image1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.title}</p>
                <Link to={`/info/${item.name}/`}>
                  <button type="button" className="btn btn-success">View Recipe</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;


