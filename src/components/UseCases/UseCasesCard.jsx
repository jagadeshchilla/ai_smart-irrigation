import React from 'react'
import './usecases.css';
const UseCasesCard = ({item}) => {
  const{title, desc}=item

  return (
    <div className='UseCase__item'>
        
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default UseCasesCard