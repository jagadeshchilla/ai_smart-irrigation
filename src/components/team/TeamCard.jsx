import React from 'react'
import './team.css';


const TeamCard = ({item}) => {
    const {imgUrl, Name, Role}=item
    return (
        <div className='service__item'>
            <div className='service__img h-16 w-16 rounded-full'>
                <img src={imgUrl} alt='' />
            </div>
            <h5>{Name}</h5>
            <p>{Role}</p>
        </div>
      );
}

export default TeamCard