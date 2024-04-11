import React from 'react'
import TeamCard from './TeamCard';
import {Col} from 'reactstrap';
import t1 from '../../assets/images/Alex.jpg';
import t4 from '../../assets/images/Navi.jpg'
import t3 from '../../assets/images/Alex friend2.jpg';
import t2 from '../../assets/images/Alex Friend.jpg';
import t6 from '../../assets/images/jaga.jpg';
import t5 from '../../assets/images/nikki.jpg';

const servicesData =[
    {
        imgUrl:t1,
        Name:'Alex',
        Role:'Team Leader',
    },
    {
        imgUrl:t3,
        Name:'Jignasa',
        Role:'B.Tech Cse',
    },
    {
        imgUrl:t2,
        Name:'Gopi',
        Role:'B.Tech Cse',
    },
    {
        imgUrl:t4,
        Name:'Naveen',
        Role:'B.Tech Cse',
    },
    {
        imgUrl:t5,
        Name:'Nikhith',
        Role:'B.Tech Cse',
    },
    {
        imgUrl:t6,
        Name:'Jagadesh',
        Role:'B.Tech Cse',
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