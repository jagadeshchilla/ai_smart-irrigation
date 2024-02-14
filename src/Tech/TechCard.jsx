import React from 'react'
import './tech.css';
const TechCard = ({item}) => {
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
export default TechCard