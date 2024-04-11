import React from 'react'
import './vision.css'
const card = ({item}) => {
    const {imgUrl, title, desc}=item

    return (
      <div className='tech__item'>
          <div className='tech__img'>
              <img src={imgUrl} alt='' />
          </div>
          <h5>{title}</h5>
          <p>{desc}</p>
      </div>
    );
  };

export default card