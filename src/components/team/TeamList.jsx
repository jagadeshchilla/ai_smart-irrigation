import React from 'react'
import TeamCard from './TeamCard';
import {Col} from 'reactstrap';
import t1 from '../../assets/images/Alex.jpg';

import t3 from '../../assets/images/Alex friend2.jpg';

import t6 from '../../assets/images/jaga.jpg';

const servicesData =[
    {
        imgUrl:t1,
        Name:'Alex',
        Role:'Co-Founder / CEO',
    },
    {
        imgUrl:t1,
        Name:'lisa',
        Role:'Co-Founder / CEO',
    },
    {
        imgUrl:t3,
        Name:'ganesh',
        Role:'BusinessRelations',
    },
    {
        imgUrl:t1,
        Name:'Naveen',
        Role:'Front-end-Developer',
    },
    {
        imgUrl:t3,
        Name:'Nikhith',
        Role:'Designer',
    },
    {
        imgUrl:t6,
        Name:'Jagadesh',
        Role:'Software-Developer',
    },
]
const TeamList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' md='6' sm='12'className='mb-4' key={index}>
                   <TeamCard item={item} />
                </Col>
            ))}
        </>
      );
}

export default TeamList