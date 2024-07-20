import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
  const removeHandler = (id) => {
    removeTour(id);
  };

  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with Love</h2>
      </div>
      <div className='cards'>
        {
          tours.map((tour) => {
            return <Card {...tour} key={tour.id} removeTour={removeHandler} />;
          })
        }
      </div>
    </div>
  );
};

export default Tours;